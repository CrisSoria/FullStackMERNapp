// puedousar ésta sintaxis porque agregué "type": "module", al package.json
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Hello to Memories API");
});

//voy aconectar a una base de datos de atlas para hostearla en la nube https:/www.mongodb.com/cloud/atlas

const CONNECTION_URL =
  "mongodb+srv://Cristian:Cristian123@cluster0.esplp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000; //para heroku

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true, //para quitar los warnings de la consola
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false); //para quitar warnings
