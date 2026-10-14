
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Projeto = sequelize.define("Projeto", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  tecnologias: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  github_url: {
    type: DataTypes.STRING,
  },
  deploy_url: {
    type: DataTypes.STRING,
  },
  imagem_url: {
    type: DataTypes.STRING,
  },
}, {
  tableName: "projetos",
  underscored: true,
});

export default Projeto;
