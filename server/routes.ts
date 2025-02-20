import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

// Homepagina
router.get("/quiz", (req: Request, res: Response): void => {
  res.render("index", { title: "Quiz" });
});

router.get("/", (req: Request, res: Response): void => {
    res.render("home", { title: "Home" });
    });

router.get("/game", (req: Request, res: Response): void => {
  res.render("game", { title: "Quiz" });
});


// Quiz verwerken
router.post("/quiz", (req: Request, res: Response): void => {
  const correctAntwoord: string = "Parijs";
  const userAntwoord: string = req.body.antwoord?.trim() || "";
  const isCorrect: boolean =
    userAntwoord.toLowerCase() === correctAntwoord.toLowerCase();
  const message: string = isCorrect
    ? "Correct! 🎉"
    : "Fout! 😢 Probeer opnieuw.";


  res.render("result", { title: "Quiz resultaat", boodschap: message });
});

router.post('/game', (req: Request, res: Response): void => {
  res.render('game', {title: 'game'});
});

export default router;
