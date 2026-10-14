
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const ExperienciaProfissional = sequelize.define("ExperienciaProfissional", {
  empresa: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cargo: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: "experiencias_profissionais",
  underscored: true,
});

export default ExperienciaProfissional;
