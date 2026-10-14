
import express from "express";
import cors from "cors";

import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(200).json({
    mensagem: "API de Currículos funcionando!",
  });
});

app.use(routes);

app.use((req, res) => {
  return res.status(404).json({
    erro: "Rota não encontrada.",
  });
});

app.use(errorHandler);

export default app;