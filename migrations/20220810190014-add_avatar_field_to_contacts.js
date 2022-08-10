'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'Contacts',
        'avatar',
        {
          type:Sequelize.STRING,
        }
      )
    ])
  },

  async down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('Contacts', 'avatar')
    ])
  }
};
