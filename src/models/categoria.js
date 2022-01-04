const db = require('../database/conection')
const { DataTypes } = require('sequelize')

const Categoria = db.define('categoria',{
    categoria: DataTypes.STRING
},{
    createdAt: false,
    updatedAt: false,
    tableName: 'categoria'
})

module.exports = Categoria