const db = require('../database/conection')
const { DataTypes  }  = require('sequelize')

const Rol = db.define('rol',
{
    rol: DataTypes.STRING
},{
    tableName: 'rol',
    createdAt: false,
    updatedAt: false
})

module.exports = Rol