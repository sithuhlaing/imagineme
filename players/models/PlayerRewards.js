'use strict';

module.exports = function(sequelize, DataTypes) {
  var PlayerRewards = sequelize.define('PlayerRewards', {
    ID                : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true, 
                            autoIncrement: true
                        },
    PlayerID          : DataTypes.BIGINT(20),
    ChallengeID       : DataTypes.BIGINT(20),
    ChallengeRewardID : DataTypes.BIGINT(20),
    UpdatedAt         : DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PlayerRewards;
};