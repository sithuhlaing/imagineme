'use strict';

module.exports = function(sequelize, DataTypes) {
  var Model = sequelize.define('Model', {
    UID        : {
                    type: DataTypes.BIGINT(20), 
                    primaryKey: true, 
                    autoIncrement: true
                 },
    RemotePath : DataTypes.TEXT
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Model;
};