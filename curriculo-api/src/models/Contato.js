
import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Contato = sequelize.define("Contato", {
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "contatos",
  underscored: true,
});

export default Contato;
