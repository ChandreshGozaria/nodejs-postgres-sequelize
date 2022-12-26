'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: '9401406a-69f1-446d-9714-2bb7d411adfd',
        username: 'Rafael Jones',
        password: 'Rafael123',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'c9d6c0b0-f7fb-46fc-a444-436c2c51e553',
        username: 'Nichols',
        password: 'Nichols123',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

