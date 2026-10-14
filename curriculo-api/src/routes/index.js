
import { Router } from "express";

import {
  Pessoa,
  FormacaoAcademica,
  ExperienciaProfissional,
  Projeto,
  Habilidade,
  Contato,
} from "../models/index.js";

import criarCrudService from "../services/crudService.js";
import criarCrudController from "../controllers/crudController.js";
import pessoaController from "../controllers/pessoaController.js";

const router = Router();

const entidades = [
  { rota: "pessoas", model: Pessoa },
  { rota: "formacoes", model: FormacaoAcademica },
  { rota: "experiencias", model: ExperienciaProfissional },
  { rota: "projetos", model: Projeto },
  { rota: "habilidades", model: Habilidade },
  { rota: "contatos", model: Contato },
];

for (const { rota, model } of entidades) {
  const service = criarCrudService(model);
  const controller = criarCrudController(service);

  router.post(`/${rota}`, controller.criar);
  router.get(`/${rota}`, controller.listar);
  router.get(`/${rota}/:id`, controller.buscarPorId);
  router.put(`/${rota}/:id`, controller.atualizar);
  router.delete(`/${rota}/:id`, controller.remover);
}

// Rotas para consultar relacionamentos
router.get(
  "/pessoas/:id/curriculo",
  pessoaController.buscarCurriculo
);

router.get(
  "/pessoas/:id/projetos",
  pessoaController.listarProjetos
);

export default router;
