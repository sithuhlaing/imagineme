'use strict';

module.exports = function(sequelize, DataTypes) {
  var PlayerInfos = sequelize.define('PlayerInfos', {
    PlayerID  :{
                    type: DataTypes.BIGINT(20), 
                    primaryKey: true
               },
    NickName  : DataTypes.STRING(25),
    Gender    : DataTypes.STRING(6),
    Telephone : DataTypes.STRING(15),
    Email     : DataTypes.STRING(25),
    Location  : DataTypes.STRING(25),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return PlayerInfos;
};