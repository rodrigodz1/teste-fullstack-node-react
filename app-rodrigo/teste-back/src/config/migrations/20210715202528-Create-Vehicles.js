'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     return queryInterface.createTable('vehicles', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
          field: "id",
        },
        veiculo: {
          type: Sequelize.STRING,
          field: "veiculo",
        },
        ano: {
          type: Sequelize.INTEGER,
          field: "ano",
        },
        descricao: {
          type: Sequelize.TEXT,
          field: "descricao",
        },
        marca: {
          type: Sequelize.STRING,
          field: "marca",
        },
        vendido: {
          type: Sequelize.BOOLEAN,
          field: "vendido",
        },
        createdAt: {
          allowNull: false,
          field: "created_at",
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          field: "updated_at",
          type: Sequelize.DATE
        }

      });
     
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.dropTable('vehicles');

  }
};
