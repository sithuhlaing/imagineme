'use strict';

module.exports = function(sequelize, DataTypes) {
  var InventoryItem = sequelize.define('InventoryItem', {
    IdentityUID   : {
                      type: DataTypes.BIGINT(20), 
                      primaryKey: true, 
                      autoIncrement: true
                    },
    ItemClassUID  : DataTypes.INTEGER(11),
    InstanceID    : DataTypes.BIGINT(20),
    StackQuantity : DataTypes.INTEGER(11),
    IsCarryOn     : DataTypes.BOOLEAN
  }, {
    timestamps: false,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return InventoryItem;
};