module.exports = (sequelize, DataTypes) => {
  return sequelize.define('<%= name %>', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    <% Object.keys(attributes).forEach(function(fieldName, index) { %>
      <%= fieldName %>: DataTypes.<%= attributes[fieldName].toUpperCase() %>
      <%= (Object.keys(attributes).length - 1) > index ? ',' : '' %>
    <% }) %>
  }, {
    <%= underscored ? 'underscored: true,' : '' %>
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
};
