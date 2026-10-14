
import Pessoa from "./Pessoa.js";
import FormacaoAcademica from "./FormacaoAcademica.js";
import ExperienciaProfissional from "./ExperienciaProfissional.js";
import Projeto from "./Projeto.js";
import Habilidade from "./Habilidade.js";
import Contato from "./Contato.js";

const relacionamentos = [
  {
    model: FormacaoAcademica,
    alias: "formacoes",
  },
  {
    model: ExperienciaProfissional,
    alias: "experiencias",
  },
  {
    model: Projeto,
    alias: "projetos",
  },
  {
    model: Habilidade,
    alias: "habilidades",
  },
  {
    model: Contato,
    alias: "contatos",
  },
];

for (const { model, alias } of relacionamentos) {
  Pessoa.hasMany(model, {
    foreignKey: {
      name: "pessoa_id",
      allowNull: false,
    },
    as: alias,
    onDelete: "CASCADE",
  });

  model.belongsTo(Pessoa, {
    foreignKey: {
      name: "pessoa_id",
      allowNull: false,
    },
    as: "pessoa",
  });
}

export {
  Pessoa,
  FormacaoAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
  Contato,
};

export default {
  Pessoa,
  FormacaoAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
  Contato,
};
