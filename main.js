
const  express = require("express")
const app = express()
const bodyParser = require("body-parser");
const PORT =3001
const routes= require("./routes/index");
const connectDB = require ("./database/db");
const test = require("./middleware/test");

app.set('view engine', 'pug')

console.log(routes);

app.use(bodyParser.json());
app.use(routes);
app.use(test);

connectDB().then (() => {
    app.listen (PORT,() => {

        console.log(`Server is running at http://localhost:${PORT}`);
    });


});

