const conexion = require("./../conexion.js");
const { DataTypes } = require("sequelize");

const Persona = conexion.define(
    "personas", 
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        rut: {
            type: DataTypes.STRING(15),
            allowNull: false,
            unique: true
        },
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, {
        // Cambiar nombres de las columnas para timestamps
        createdAt: 'created_at',  // Nombre personalizado para createdAt
        updatedAt: 'update_at', // Nombre personalizado para updatedAt
        timestamps: true, // Activar timestamps
    }
);

module.exports = Persona;