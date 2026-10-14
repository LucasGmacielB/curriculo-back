
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FormacaoAcademica = sequelize.define("FormacaoAcademica", {
  instituicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  curso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
  },
  data_inicio: {
    type: DataTypes.DATEONLY,
  },
  data_fim: {
    type: DataTypes.DATEONLY,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: "formacoes_academicas",
  underscored: true,
});

export default FormacaoAcademica;
