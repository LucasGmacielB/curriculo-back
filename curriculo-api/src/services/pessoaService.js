
import {
  Pessoa,
  FormacaoAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
  Contato,
} from "../models/index.js";

const buscarCurriculo = async (id) => {
  const pessoa = await Pessoa.findByPk(id, {
    include: [
      { model: FormacaoAcademica, as: "formacoes" },
      { model: ExperienciaProfissional, as: "experiencias" },
      { model: Projeto, as: "projetos" },
      { model: Habilidade, as: "habilidades" },
      { model: Contato, as: "contatos" },
    ],
  });

  if (!pessoa) {
    const erro = new Error("Pessoa não encontrada");
    erro.status = 404;
    throw erro;
  }

  return pessoa;
};

const listarProjetos = async (id) => {
  const pessoa = await Pessoa.findByPk(id);

  if (!pessoa) {
    const erro = new Error("Pessoa não encontrada");
    erro.status = 404;
    throw erro;
  }

  return await Projeto.findAll({
    where: { pessoa_id: id },
    order: [["id", "ASC"]],
  });
};

export default {
  buscarCurriculo,
  listarProjetos,
};
