const { DataTypes, sequelize } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define(
    'ADMINS',
    {
      admin_firstname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      admin_lastname: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      admin_email: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passwd: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  )
}
