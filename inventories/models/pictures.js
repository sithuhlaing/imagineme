'use strict';

module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define('Picture', {
    UID        : {
                    type         : DataTypes.BIGINT(20), 
                    primaryKey   : true, 
                    autoIncrement: true
                  },
    RemotePath : DataTypes.TEXT
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Picture;
};