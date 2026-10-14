
import {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
} from "sequelize";

const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err instanceof UniqueConstraintError) {
    return res.status(409).json({
      erro: "Já existe um registro com esse valor único.",
    });
  }

  if (err instanceof ForeignKeyConstraintError) {
    return res.status(400).json({
      erro: "Relacionamento inválido ou registro em uso.",
    });
  }

  if (err instanceof ValidationError) {
    return res.status(400).json({
      erro: "Dados inválidos.",
      detalhes: err.errors.map((e) => e.message),
    });
  }

  return res.status(err.status || 500).json({
    erro: err.status ? err.message : "Erro interno do servidor.",
  });
};

export default errorHandler;
