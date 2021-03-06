'use strict';
module.exports = (sequelize, DataTypes) => {
 const groups = sequelize.define('groups', {
   //id: DataTypes.INTEGER,
    groupname: DataTypes.STRING,
    user_id: DataTypes.STRING,
    group_id: DataTypes.STRING
 }, {
   classMethods: {
     associate: (models) => {
       // associations can be defined here
       groups.belongsTo(models.group_users);
     }
   }
 });
 return groups;
};