'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      place_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      service_id: {
        type: Sequelize.UUID,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};