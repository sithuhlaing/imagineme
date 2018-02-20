'use strict';

module.exports = function(sequelize, DataTypes) {
  var Challenge = sequelize.define('Challenge', {
    IdentityUID       : {
                          type: DataTypes.BIGINT(20), 
                          primaryKey: true, 
                          autoIncrement: true
                        },
    ChallengeClassUID : DataTypes.INTEGER(11),
    Progression       : DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Challenge;
};