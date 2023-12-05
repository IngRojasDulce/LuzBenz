const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // definicion  del modelo
  sequelize.define('Category', {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps:false, freezeTableName: true},)
};
