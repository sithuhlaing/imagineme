'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeBaits = sequelize.define('ChallengeBaits', {
    ChallengeID  : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                   },
    Casting     : DataTypes.STRING(25),
    Precision   : DataTypes.STRING(25)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeBaits;
};