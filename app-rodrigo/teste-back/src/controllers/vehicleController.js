const { Vehicle } = require("../models")
const { Op } = require("sequelize");

module.exports = {

  async getAllVehicles(request, response){
    try {
      
      let veiculos = await Vehicle.findAll()
      return response.status(200).json({ veiculos: veiculos })

    } catch (error) {
      return response.status(400).json({ msg: error })
    }
  },

  async CreateVehicle(request, response){
    try {
      let newVehicle = await Vehicle.create(request.body)
      return response.status(201).json({ veiculo: newVehicle })

    } catch (error) {
      return response.status(400).json({ msg: error })
    }
  },

  async getOneVehicle(request, response){
    try {
      let q = request.query.q
      let newVehicle = await Vehicle.findAll({
        where: {
          veiculo: {
          [Op.like]: "%" + q + "%"
        }
      }
      })
      return response.status(201).json({ veiculo: newVehicle })

    } catch (error) {
      return response.status(400).json({ msg: error })
    }
  },


}