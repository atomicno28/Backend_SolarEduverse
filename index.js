import mongoose from "mongoose";
import express from "express";
import cors from "cors";

import { sendFile } from "./routes/users.js";
import config from "./config.js";

// can interact with every instance of express
const app = express();

const port = 3001;

// middleware.
app.use(express.json());
app.use(cors());

// abstracted the mongodb for maintaining confidentiality.
const KEY = config.dBKey;

mongoose.connect(KEY);

// separated the configuration of post request.
app.use("/db", sendFile);

app.listen(port, (req, res) => {
  console.log("Server Initiated...");
});
