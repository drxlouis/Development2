import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT: number = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.send("");
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});