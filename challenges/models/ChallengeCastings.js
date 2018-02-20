'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeCastings = sequelize.define('ChallengeCastings', {
    ChallengeID      : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true
                       },
    CastingStyle     : DataTypes.STRING(25),
    CastingPrecision : DataTypes.STRING(25),
    CastingDistance  : DataTypes.STRING(25),
    BaitCasting      : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeCastings;
};