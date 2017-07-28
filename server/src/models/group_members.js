'use strict';
module.exports = (sequelize, DataTypes) => {
  const group_members = sequelize.define(
    'group_members',
    {
      //id: DataTypes.INTEGER,
      group_id: DataTypes.STRING,
      username: DataTypes.STRING
    },
    {
      classMethods: {
        associate: models => {
          // associations can be defined here
          group_members.belongsTo(models.groups, {
            foreignKey: 'id',
            sourceKey: 'group_id'
          });
        }
      }
    }
  );
  return group_members;
};
