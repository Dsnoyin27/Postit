'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      //id: DataTypes.INTEGER,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER
    },
    {
      classMethods: {
        associate: models => {}
      }
    }
  );
  return users;
};
