'use strict';

module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4, allowNull: false },
    service_id: {
      type: DataTypes.STRING
    },
    user_id: {
      type: DataTypes.STRING
    },
    place_id: {
      type: DataTypes.STRING
    },
    total: DataTypes.STRING,
    payment_method: DataTypes.STRING
  }, { timestamps: false });
  Appointment.associate = function (models) {
    // associations can be defined here
    Appointment.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'users'
    });

    Appointment.belongsTo(models.Place, {
      foreignKey: 'place_id',
      as: 'places'
    });
    Appointment.belongsTo(models.Service, {
      foreignKey: 'service_id',
      as: 'services'
    });
  };
  return Appointment;
};