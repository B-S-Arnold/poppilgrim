'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    url: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.Spot, { 
      foreignKey: 'spotId',
      onDelete: 'CASCADE',
     })

  };
  return Image;
};