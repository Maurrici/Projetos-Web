import bodyParser from 'body-parser';
import ejs from 'ejs';
import express from 'express';
import router from "./routes/routes.js";

// Server Config
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set("view engine", "ejs");

app.use("/",router);

app.listen(3000,() => {
    console.log("Server is running");
});
