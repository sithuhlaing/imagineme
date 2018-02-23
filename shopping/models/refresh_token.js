'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RefreshToken', {
        refreshToken: DataTypes.STRING,
        clientId: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        expires: DataTypes.DATE
    });
};