'use strict';

module.exports = function(sequelize, DataTypes) {
  var UserToIdentityForeignaccesstoken = sequelize.define('UserToIdentityForeignaccesstoken', {
    UID             : {
                        type: DataTypes.BIGINT(20), 
                        primaryKey: true, 
                        autoIncrement: true
                      },
    UserID          : DataTypes.BIGINT(20),
    IdentityUID     : DataTypes.BIGINT(20),
    ExpirationDate  : DataTypes.DATE,
    LastHeartbeat   : DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserToIdentityForeignaccesstoken;
};