'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Places",
      [
        {
          id :'6356d43e-f165-4cbb-8fbf-b5fcbadf3636',
          user_id: "9401406a-69f1-446d-9714-2bb7d411adfd",
          address: "Adelaide, Darwin",
          city: "Billings",
          country: "United States",
          zip:"63104"
        },
        {
          id: '183a2ac3-99a0-4fe8-b10c-76353f376b69',
          user_id: "9401406a-69f1-446d-9714-2bb7d411adfd",
          address: "4283 Rose Avenue",
          city: "Metairie",
          country: "Louisiana(LA)",
          zip:"70007"
        },
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Places", null, {})
};
