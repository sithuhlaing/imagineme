'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeRewards = sequelize.define('ChallengeRewards', {
    ChallengeRewardID  : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true,
                            autoincrement: true
                        },
    ChallengeID        : DataTypes.BIGINT(20),
    RewardID           : DataTypes.BIGINT(20),
    Other              : DataTypes.STRING(25)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeRewards;
};