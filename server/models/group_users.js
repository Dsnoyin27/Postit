'use strict';
module.exports = (sequelize, DataTypes) => {
 const group_users = sequelize.define('group_users', {
   //id: DataTypes.INTEGER,
    group_id: DataTypes.STRING,
    user_id: DataTypes.STRING
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       group_users.belongsTo(models.group_users);
     }
   }
 });
 return group_users;
};