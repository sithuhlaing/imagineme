'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeSetups = sequelize.define('ChallengeSetups', {
    ChallengeID : {
                    type: DataTypes.BIGINT(20), 
                    primaryKey: true
                },
    Location    : DataTypes.STRING(25),
    Spot        : DataTypes.STRING(25),
    TimeOfDay   : DataTypes.STRING(25),
    Season      : DataTypes.STRING(25),
    Wealther    : DataTypes.STRING(25),
    Temperature : DataTypes.STRING(25),
    Wind        : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeSetups;
};