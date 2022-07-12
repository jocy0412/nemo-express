import { Router } from 'express';
import tags from '../controllers/tag.controller.js';
import db from '../models/index.js'
import upload from './multer.js'

const { Card } = db;

const router = Router();

export default app => {

  router.post('/create', upload.single('image'), async (req, res)=> {
    const {user_id, nickname, tag_1, tag_2, tag_3, intro} = req.body;

    
    let tag_id_1 = await tags.findWithName(tag_1);
    let tag_id_2 = await tags.findWithName(tag_2);
    let tag_id_3 = await tags.findWithName(tag_3);

    tag_id_1 = tag_id_1 ? tag_id_1.id : tags.create(tag_1);
    tag_id_2 = tag_id_2 ? tag_id_2.id : tags.create(tag_2);
    tag_id_3 = tag_id_3 ? tag_id_3.id : tags.create(tag_3);

    const img_url = req.file.path;
    const succ = await Card.create({user_id, nickname, tag_id_1, tag_id_2, tag_id_3, intro, img_url})
    if (succ){
      res.status(201).send("success")
    } else{
      res.status(404).send("fail");
    }
  })

  // 임시용
  // router.get('/tag/:', async (req, res) => {
    // const is_already = tags.
  // })

  app.use('/api/card', router);
};