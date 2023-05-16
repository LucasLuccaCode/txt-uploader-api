import "dotenv/config";

import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// Conexão com banco de dados
import db from "./database/mongodb";

db.once("open", () => {
  console.log("Conexão estabelecida com banco de dados mongodb.");
  app.emit("logged");
});

app.use("/", (req, res) => {
  res.status(200).send("Txt Uploader API!");
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.on("logged", () => {
  app.listen(port, () => console.log(`Server rodando na porta ${port}`));
});
