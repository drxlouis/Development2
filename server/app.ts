import express, { Application, Request, Response } from "express";
import path from "path";

const app: Application = express();
const PORT: number = 3000;

app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.use(express.static(path.join(__dirname, "/public")));



app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});