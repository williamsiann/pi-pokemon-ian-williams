const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Type = sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
    {
      timestamps: false, // Deshabilita las columnas createdAt y updatedAt
    });

  return Type;
};
