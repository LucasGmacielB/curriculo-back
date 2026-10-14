
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Pessoa = sequelize.define("Pessoa", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bio: {
    type: DataTypes.TEXT,
  },
  foto_url: {
    type: DataTypes.STRING,
  },
  localizacao: {
    type: DataTypes.STRING,
  },
}, {
  tableName: "pessoas",
  underscored: true,
});

export default Pessoa;
