'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Reviews",
      [
        {
          id: 'd719a1ce-ed89-4d47-a267-27fbf0c5b118',
          service_id: 'f15778f9-6b5b-42b2-af9b-0bd41425930d',
          user_id: 'c9d6c0b0-f7fb-46fc-a444-436c2c51e553',
          place_id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          description:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh."
        },
        {
          id: '09b310f7-8222-4329-9816-ddd8b3bb0157',
          service_id: 'f15778f9-6b5b-42b2-af9b-0bd41425930d',
          user_id: 'c9d6c0b0-f7fb-46fc-a444-436c2c51e553',
          place_id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          description:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat."
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Reviews", null, {})
};