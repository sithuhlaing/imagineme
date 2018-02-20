'use strict';

module.exports = function(sequelize, DataTypes) {
  var ItemClass = sequelize.define('ItemClass', {
    UID                : {
                            type: DataTypes.BIGINT(20), 
                            primaryKey: true, 
                            autoIncrement: true
                         },
    Name               : DataTypes.STRING(30),
    ItemType           : DataTypes.INTEGER(4),
    Statistics         : DataTypes.TEXT,
    FlavourText        : DataTypes.TEXT,
    ModelUID           : DataTypes.INTEGER(11),
    PictureUID         : DataTypes.BIGINT(20),
    StackQuantityLimit : DataTypes.INTEGER(11)
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return ItemClass;
};