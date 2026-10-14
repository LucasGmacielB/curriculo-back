
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Habilidade = sequelize.define("Habilidade", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
  },
  nivel: {
    type: DataTypes.STRING,
  },
}, {
  tableName: "habilidades",
  underscored: true,
});

export default Habilidade;
