module.exports = (sequelize, Sequelize) => {
  const School = sequelize.define(
    'school',
    {
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      initialAutoIncrement: 1001,
    },
  )

  return School
}
