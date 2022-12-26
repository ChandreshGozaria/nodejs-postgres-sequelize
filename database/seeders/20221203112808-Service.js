'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Services",
      [
        {
          id: '7f3cb661-8d8a-4977-b759-815f04cd9a57',
          cost: 100,
          place_id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          description:
            "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
        },
        {
          id: 'f15778f9-6b5b-42b2-af9b-0bd41425930d',
          cost: 200,
          place_id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          description:
            "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Services", null, {})
};
