'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeEquipments = sequelize.define('ChallengeEquipments', {
    ChallengeID  : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                    },
    NoOfRods     : DataTypes.INTEGER(),
    Restriction  : DataTypes.STRING(25),
    Available    : DataTypes.BOOLEAN,
    Rod          : DataTypes.STRING(25),
    Boat         : DataTypes.STRING(25),
    Baitcasting  : DataTypes.BOOLEAN,
    Line         : DataTypes.STRING(25),
    HookOrLure   : DataTypes.BOOLEAN,
    Specific     : DataTypes.STRING(25)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeEquipments;
};