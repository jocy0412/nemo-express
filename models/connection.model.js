export default (sequelize, Sequelize) => {
  const Connection = sequelize.define('connection', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id_1: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    user_id_2: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    connection_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  );
  return Connection;
};