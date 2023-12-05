const {DataTypes} = require(' sequelize');


// Definicion principal de las caracteristicas del producto 
// se define  id, nombre del producto,precio, imagen

modele.exports = (sequelize) =>{
    sequelize.define(product, {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRINGS,
            allowNull: false
        },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },


    }, { timestamps: false, freezeTableName: true })
}