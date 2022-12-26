'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Place extends Model {

    static associate(models) {
      // define association here
      Place.hasMany(models.Service, {
        foreignKey: 'place_id',
        as: 'services',
        onDelete: 'CASCADE',
      });
  
      Place.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'users',
        onDelete: 'CASCADE',
      });

      Place.hasMany(models.Appointment, {
        foreignKey: 'place_id',
        as: 'appointments',
        onDelete: 'CASCADE',
      });
    }
  }
  Place.init({
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4, allowNull: false },
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    zip: DataTypes.STRING,
    user_id:  {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'Place',
    timestamps: false,
  });
  return Place;
};