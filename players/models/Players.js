'use strict';

module.exports = function(sequelize, DataTypes) {
  var Players = sequelize.define('Players', {
    PlayerID           :{
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true, 
                            autoIncrement: true
                        },
    XBoxID             : DataTypes.STRING(25),//DataTypes.BIGINT(20)
    PS4ID              : DataTypes.STRING(25),//DataTypes.BIGINT(20)
    SteamID            : DataTypes.STRING(25),//DataTypes.BIGINT(20)
    PlayerLogin        : DataTypes.STRING(25),
    PlayerPassword     : DataTypes.STRING(25),
    PlayerToken        : DataTypes.TEXT,
    PlayerTokenExpDate : DataTypes.DATE,
    PlayerLocale       : DataTypes.STRING(25),
    DeviceUID          : DataTypes.BIGINT(20),
    DeviceModel        : DataTypes.STRING(25),
    DeviceType         : DataTypes.STRING(25),
    GameVersion        :  DataTypes.STRING(25),
    DateUpdated        : DataTypes.DATE,
    DateCreated        : DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Players;
};