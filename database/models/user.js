'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      // define association here
      User.hasMany(models.Place, {
        foreignKey: 'user_id',
        as: 'places',
        onDelete: 'CASCADE',
      });

      User.hasMany(models.Appointment, {
        foreignKey: 'user_id',
        as: 'appointments',
        onDelete: 'CASCADE',
      });
    }
  }
  User.init({
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4, allowNull: false },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};