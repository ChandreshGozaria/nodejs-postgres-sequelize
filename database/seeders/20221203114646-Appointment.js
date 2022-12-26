'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Appointments",
      [
        {
          id: 'de08f3e8-2221-4b56-92ac-6cd57325ac9b',
          service_id: 'f15778f9-6b5b-42b2-af9b-0bd41425930d',
          user_id: '9401406a-69f1-446d-9714-2bb7d411adfd',
          place_id: '6356d43e-f165-4cbb-8fbf-b5fcbadf3636',
          total: "200",
          payment_method: 'Cash',
        },
        {
          id: '19cb91a9-a4ef-4a4e-9d3d-73fdf6358e30',
          service_id: 'f15778f9-6b5b-42b2-af9b-0bd41425930d',
          user_id: 'c9d6c0b0-f7fb-46fc-a444-436c2c51e553',
          place_id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          total: "300",
          payment_method: 'Cash'
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Appointment", null, {})
};

