'use strict';

module.exports = function(sequelize, DataTypes) {
  var Challenges = sequelize.define('Challenges', {
    ChallengeID        : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true,
                            autoincrement: true
                        },
    LevelOrder        : DataTypes.STRING(25),
    PlayMode          : DataTypes.STRING(25),
    StartMode         : DataTypes.STRING(25),
    StartDate         : DataTypes.DATE,
    EndDate           : DataTypes.DATE,
    ActiveForTest     : DataTypes.BOOLEAN,
    ActiveForPlayer   : DataTypes.BOOLEAN,
    IsHidden          : DataTypes.BOOLEAN,
    IsTestMode        : DataTypes.BOOLEAN,
    TestCode          : DataTypes.INTEGER(),
    ChallengeType     : DataTypes.INTEGER(),
    Technique         : DataTypes.STRING(25),
    Retrieving        : DataTypes.STRING(25),
    Strike            : DataTypes.STRING(25),
    Participate       : DataTypes.STRING(25),
    Rank              : DataTypes.INTEGER(),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Challenges;
};