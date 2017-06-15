'use strict';
module.exports = (sequelize, DataTypes) => {
 const users = sequelize.define('users', {
   //id: DataTypes.INTEGER,
   username: DataTypes.STRING,
   email: DataTypes.STRING,
   password: DataTypes.INTEGER,
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       users.belongsTo(models.groups);
     }
   }
 });
 return users;
};