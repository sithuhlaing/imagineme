'use strict';

module.exports = function(sequelize, DataTypes) {
    var AccessToken = sequelize.define('AccessToken', {
        accessToken: DataTypes.STRING,
        clientId: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            unique: true
        },
        expires: DataTypes.DATE
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return AccessToken;
};