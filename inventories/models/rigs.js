'use strict';

module.exports = function(sequelize, DataTypes) {
  var Rig = sequelize.define('Rig', {
    UID              : {
                          type         : DataTypes.BIGINT(20), 
                          primaryKey   : true, 
                          autoIncrement: true
                       },
    RigConfiguration : DataTypes.TEXT
  }, {
    classMethods: {
      timestamps: false,
      associate: function(models) {
        
      }
    }
  });
  return Rig;
};