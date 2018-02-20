'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    UID                  : {
                              type: DataTypes.BIGINT(20), 
                              primaryKey: true, 
                              autoIncrement: true
                            },
    UserName             : DataTypes.STRING(20),
    Password             : DataTypes.STRING(40),
    PlatformAccountToken : DataTypes.STRING(50),
    LastIdentityUIDSP    : DataTypes.BIGINT(20),
    LastIdentityUIDMP1   : DataTypes.BIGINT(20),
    LastIdentityUIDMP2   : DataTypes.BIGINT(20),
    LastIdentityUIDMP3   : DataTypes.BIGINT(20),
    LastIdentityUIDMP4   : DataTypes.BIGINT(20)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};