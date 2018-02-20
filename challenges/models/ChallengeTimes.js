'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeTimes = sequelize.define('ChallengeTimes', {
    ChallengeID        : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true
                        },
    TotalTime        : DataTypes.DATE,
    TimeToRetrive    : DataTypes.DATE,    
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeTimes;
};