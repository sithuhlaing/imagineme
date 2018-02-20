'use strict';

module.exports = function(sequelize, DataTypes) {
  var PlayerChallenges = sequelize.define('PlayerChallenges', {
    PlayerID           : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true
                        },
    ChallengeID        : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true
                        },
    PlayerScore        : DataTypes.INTEGER(),
    PlayerRank         : DataTypes.STRING(25),
    PlayerData         : DataTypes.TEXT,
    UpdatedAt          : DataTypes.DATE,
    ChallengeIsHidden  : DataTypes.BOOLEAN,
    ChallengeIsTestMode: DataTypes.BOOLEAN,
    TestingScore       : DataTypes.INTEGER()
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PlayerChallenges;
};