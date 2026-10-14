
import pessoaService from "../services/pessoaService.js";

const buscarCurriculo = async (req, res, next) => {
  try {
    const curriculo = await pessoaService.buscarCurriculo(
      req.params.id
    );

    return res.status(200).json(curriculo);
  } catch (error) {
    next(error);
  }
};

const listarProjetos = async (req, res, next) => {
  try {
    const projetos = await pessoaService.listarProjetos(
      req.params.id
    );

    return res.status(200).json(projetos);
  } catch (error) {
    next(error);
  }
};

export default {
  buscarCurriculo,
  listarProjetos,
};
