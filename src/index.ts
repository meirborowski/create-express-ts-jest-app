import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port or default to 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
