const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_CONNECTION, {
  dialect: "postgres"
});

const user = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: { type: DataTypes.TEXT },
  nome: { type: DataTypes.TEXT },
  email: { type: DataTypes.TEXT },
  password: { type: DataTypes.TEXT },
  token: { type: DataTypes.TEXT }
});

const teste = sequelize.define("teste", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: { type: DataTypes.TEXT }
});
module.exports = { user, teste };

(async () => {
  await sequelize.sync({ force: false });
  console.log("modelo atualizado");
})();
