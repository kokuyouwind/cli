'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface
      .createTable('<%= tableName %>', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        <% _.each(attributes, function (dataType, fieldName) { %>
          <%= fieldName %>: {
            type: Sequelize.<%= dataType.toUpperCase() %>
          },
        <% }) %>

        <%= createdAt %>: {
          allowNull: false,
          type: Sequelize.DATE
        },

        <%= updatedAt %>: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('<%= tableName %>');
  }
};
