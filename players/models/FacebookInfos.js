'use strict';

module.exports = function(sequelize, DataTypes) {
  var FacebookInfos = sequelize.define('FacebookInfos', {
    PlayerID      :{
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true
                    },
    FacebookID    : DataTypes.STRING(25),//DataTypes.BIGINT(20)
    FacebookToken : DataTypes.STRING(25),//DataTypes.BIGINT(20)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return FacebookInfos;
};