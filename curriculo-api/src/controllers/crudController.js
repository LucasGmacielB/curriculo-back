
const criarCrudController = (service) => {
  const criar = async (req, res, next) => {
    try {
      const registro = await service.criar(req.body);

      return res.status(201).json(registro);
    } catch (error) {
      next(error);
    }
  };

  const listar = async (req, res, next) => {
    try {
      const registros = await service.listar();

      return res.status(200).json(registros);
    } catch (error) {
      next(error);
    }
  };

  const buscarPorId = async (req, res, next) => {
    try {
      const registro = await service.buscarPorId(req.params.id);

      return res.status(200).json(registro);
    } catch (error) {
      next(error);
    }
  };

  const atualizar = async (req, res, next) => {
    try {
      const registro = await service.atualizar(
        req.params.id,
        req.body
      );

      return res.status(200).json(registro);
    } catch (error) {
      next(error);
    }
  };

  const remover = async (req, res, next) => {
    try {
      await service.remover(req.params.id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  };

  return {
    criar,
    listar,
    buscarPorId,
    atualizar,
    remover,
  };
};

export default criarCrudController;