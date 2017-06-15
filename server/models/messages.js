'use strict';
module.exports = (sequelize, DataTypes) => {
 const messages = sequelize.define('messages', {
   //id: DataTypes.INTEGER,
   group_id: DataTypes.STRING,
   message_body: DataTypes.STRING,
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       messages.belongsTo(models.User);
     }
   }
 });
 return messages;
};