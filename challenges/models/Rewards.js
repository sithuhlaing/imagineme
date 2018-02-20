'use strict';

module.exports = function(sequelize, DataTypes) {
  var Rewards = sequelize.define('Rewards', {
    RewardID     : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                    },
    Title        : DataTypes.STRING(25),
    Description  : DataTypes.STRING(25),
    Type         : DataTypes.STRING(25),
    Value        : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rewards;
};