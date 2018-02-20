'use strict';

module.exports = function(sequelize, DataTypes) {
  var Identity = sequelize.define('Identity', {
    UID              : {
                         type: DataTypes.BIGINT(20), 
                         primaryKey: true, 
                         autoIncrement: true
                       },
    OwnedByUser      : DataTypes.BIGINT(20),
    CharSkin         : DataTypes.INTEGER(4),
    CharOutfit       : DataTypes.INTEGER(4),
    CharDecalColor   : DataTypes.CHAR(9),
    CurrencyPrimary  : DataTypes.BIGINT(20),
    ExperiencePoints : DataTypes.BIGINT(20),
    CharName         : DataTypes.CHAR(20)
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Identity;
};