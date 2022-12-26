'use strict';

module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    description: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    place_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });

  Service.associate = function (models) {
    // associations can be defined here
    Service.belongsTo(models.Place, {
      foreignKey: 'place_id',
      as: 'places'
    });
  };
  return Service;
};
