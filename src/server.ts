import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.status(200).send("Txt Uploader API!");
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "Rota não encontrada." });
});

app.listen(port, () => console.log(`Server rodando na porta ${port}`));
