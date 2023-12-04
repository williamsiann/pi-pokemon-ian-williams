const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Pokemon = sequelize.define('Pokemon', {
      id: {
        type: DataTypes.UUID, // Cambiado a UUID para usar v4
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4, // Valor por defecto para UUID v4
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      health: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stroke: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      defending: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      speed: {
        type: DataTypes.INTEGER,
      },
      height: {
        type: DataTypes.FLOAT,
      },
      weight: {
        type: DataTypes.FLOAT,
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    }, {
      timestamps: false, // Deshabilita las columnas createdAt y updatedAt
    });
  
    return Pokemon;
  };
    

