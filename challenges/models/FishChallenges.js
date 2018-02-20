'use strict';

module.exports = function(sequelize, DataTypes) {
  var FishChallenges = sequelize.define('FishChallenges', {
    ChallengeID    : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                    },
    FishSpecies1   : DataTypes.STRING(25),
    FishSpecies2   : DataTypes.STRING(25),
    FishSpecies3   : DataTypes.STRING(25),
    Fish1          : DataTypes.STRING(25),
    Fish2          : DataTypes.STRING(25),
    Fish3          : DataTypes.STRING(25),
    FishStat1      : DataTypes.STRING(25),
    FishStat2      : DataTypes.STRING(25),
    FishStat3      : DataTypes.STRING(25),
    Lost           : DataTypes.STRING(25),
    TotalNumber    : DataTypes.INTEGER,
    TotalWeight    : DataTypes.INTEGET,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FishChallenges;
};