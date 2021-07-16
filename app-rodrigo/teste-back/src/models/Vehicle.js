const Vehicle = (sequelize, DataTypes) => {
  let vehicle = sequelize.define(
      "Vehicle",
      {
          veiculo: {
              type: DataTypes.STRING,
          },
          ano: {
              type: DataTypes.INTEGER,
          },
          descricao: {
              type: DataTypes.TEXT,
          },
          marca: {
              type: DataTypes.STRING,
          },
          vendido: {
              type: DataTypes.BOOLEAN,
          }
      },
      {
          tableName: "vehicles",
          timestamps: true,
      }
  )

  return vehicle;
}

module.exports = Vehicle