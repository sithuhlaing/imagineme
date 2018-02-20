'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeCompetitions = sequelize.define('ChallengeCompetitions', {
    ChallengeID  : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                   },
    Participate  : DataTypes.STRING(25),
    Rank         : DataTypes.STRING(25)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeCompetitions;
};