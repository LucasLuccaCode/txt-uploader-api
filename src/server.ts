import "dotenv/config";

import express from "express";
import fileRoutes from "./routes/fileRoutes";

import { handleErrorMiddleware } from "./middlewares/handleErrorMiddleware";
import { rateLimitMiddleware } from "./middlewares/rateLimitMiddleware";

const app = express();
const port = process.env.PORT || 3000;

// Conectar ao banco de dados mongodb
import db from "./database/mongodb";

db.once("open", () => {
  console.log("Conexão estabelecida com banco de dados mongodb.");
  app.emit("logged");
});

// Rotas
app.use(rateLimitMiddleware);

app.get("/", (req, res) => {
  res.status(200).send("Txt Uploader API");
});

app.use("/", fileRoutes);

app.use(handleErrorMiddleware);

app.use("*", (req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

// Iniciar servidor
app.on("logged", () => {
  app.listen(port, () => console.log(`Server rodando na porta ${port}`));
});
