const db = require('../database/conection')
const { DataTypes } = require('sequelize')
const Libro = require('./libro')
const Biblioteca = require('./biblioteca')
const Usuario = require('./usuario')

const DetalleLibro = db.define('detalle_libro',{
    libro_id: DataTypes.INTEGER,
    biblioteca_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    inicio: DataTypes.TIME,
    final: DataTypes.TIME
},{
    tableName: 'detalle_libro',
    createdAt:false,
    updatedAt: false
})

Libro.hasMany(DetalleLibro,{
    foreignKey:'libro_id'
}),
DetalleLibro.belongsTo(Libro,{
    foreignKey: 'id'
})

Biblioteca.hasMany(DetalleLibro,{
    foreignKey: 'biblioteca_id'
})
DetalleLibro.belongsTo(Biblioteca,{
    foreignKey: 'id'
})
Usuario.hasMany(DetalleLibro,{
    foreignKey: 'usuario_id'
})
DetalleLibro.belongsTo(Usuario,{
    foreignKey: 'id'
})



module.exports = DetalleLibro