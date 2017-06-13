'use strict';
module.exports = function(sequelize, DataTypes) {
  var Postit = sequelize.define('Postit', {
    title: DataTypes.STRING,
    complete: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Postit.belongsTo(models.User);// associations can be defined here
      }
    }
  });
  return Todo;
};
