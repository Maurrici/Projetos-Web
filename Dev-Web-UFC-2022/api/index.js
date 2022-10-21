import bodyParser from 'body-parser';
import express from 'express';
import router from "./src/routes/routes";

const app = express();
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/",router);

app.listen(3000,() => {
    console.log("Server is running");
});
