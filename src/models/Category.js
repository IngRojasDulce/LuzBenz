const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  const Category = sequelize.define('Category', {
    
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps:false, freezeTableName: true},);
  return Category;
};
