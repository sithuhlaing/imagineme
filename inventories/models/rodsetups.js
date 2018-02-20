'use strict';

module.exports = function(sequelize, DataTypes) {
  var RodSetup = sequelize.define('RodSetup', {
    IdentityUID    : {
                        type         : DataTypes.BIGINT(20), 
                        primaryKey   : true, 
                        autoIncrement: true
                    },
    SlotID         : DataTypes.INTEGER(6),
    RodInstanceID  : DataTypes.BIGINT(20),
    LineInstanceID : DataTypes.BIGINT(20),
    ReelInstanceID : DataTypes.BIGINT(20),
    RigID          : DataTypes.BIGINT(20)
  }, {
    classMethods: {
      timestamps: false,
      associate: function(models) {
        
      }
    }
  });
  return RodSetup;
};