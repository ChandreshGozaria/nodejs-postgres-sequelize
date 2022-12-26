'use strict';

module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4, allowNull: false },
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    place_id: DataTypes.INTEGER,
    service_id: DataTypes.INTEGER
  }, {timestamps: false});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users'
    });
    Review.belongsTo(models.Place, {
      foreignKey: 'place_id',
      as: 'places'
    });
    Review.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'services'
    });
  };
  return Review;
};