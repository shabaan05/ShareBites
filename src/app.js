// src/app.js
import express from "express";
import path from "path";
import dotenv from "dotenv";
import indexRoutes from "./routes/index.js";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// db connection
import connectDB from "./config/db.js";
connectDB(); 

//............................................................
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public"))); // serve public folder
// Set EJS as view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//............................................................

// routes 
app.use("/", indexRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
