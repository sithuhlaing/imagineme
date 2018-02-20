'use strict';

module.exports = function(sequelize, DataTypes) {
  var Achievement = sequelize.define('Achievement', {
    IdentityUID         : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true, 
                            autoIncrement: true
                          },
    AchievementClassUID : DataTypes.INTEGER(11),
    Progression         : DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Achievement;
};