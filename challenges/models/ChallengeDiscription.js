'use strict';

module.exports = function(sequelize, DataTypes) {
  var ChallengeDescriptions = sequelize.define('ChallengeDescriptions', {
    ChallengeID        : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true
                        },
    TitleShort       : DataTypes.STRING(25),
    Title            : DataTypes.STRING(25),
    ShortDescription : DataTypes.STRING(25),
    Description      : DataTypes.STRING(25),
    Icon             : DataTypes.STRING(25),
    Banner           : DataTypes.STRING(25),
    Help             : DataTypes.STRING(25),
    Tip1             : DataTypes.STRING(25),
    Tip2             : DataTypes.STRING(25),
    Tip3             : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return ChallengeDescriptions;
};