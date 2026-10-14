
const criarCrudService = (Model) => {
  const criar = async (dados) => {
    return await Model.create(dados);
  };

  const listar = async () => {
    return await Model.findAll({
      order: [["id", "ASC"]],
    });
  };

  const buscarPorId = async (id) => {
    const registro = await Model.findByPk(id);

    if (!registro) {
      const erro = new Error("Registro não encontrado");
      erro.status = 404;
      throw erro;
    }

    return registro;
  };

  const atualizar = async (id, dados) => {
    const registro = await buscarPorId(id);

    await registro.update(dados);

    return registro;
  };

  const remover = async (id) => {
    const registro = await buscarPorId(id);

    await registro.destroy();
  };

  return {
    criar,
    listar,
    buscarPorId,
    atualizar,
    remover,
  };
};

export default criarCrudService;
