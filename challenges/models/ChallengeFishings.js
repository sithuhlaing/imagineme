'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeFishings = sequelize.define('ChallengeFishings', {
    ChallengeID    : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                     },
    Retrieving     : DataTypes.STRING(25),
    Strike         : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeFishings;
};