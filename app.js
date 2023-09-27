import express from "express";
import bodyParser from "body-parser";

import studentsRoutes from "./routes/students.js";

//initialize
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/people", studentsRoutes);
app.get("/", (req, res) => res.send("Welcome to the Students API"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () => console.log(`Server Runnings on port: http://localhost:${PORT}`));
