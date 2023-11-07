'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const userData = {
      balance: 10000
    };

    await queryInterface.bulkInsert('users', [
      {
        ...userData,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
