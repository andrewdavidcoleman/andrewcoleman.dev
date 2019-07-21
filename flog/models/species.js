module.exports = function(sequelize, DataTypes) {
  const Species = sequelize.define("Species", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return Species;
};
