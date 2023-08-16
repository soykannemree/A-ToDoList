import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var newItemlist=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));



app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.post("/", (req, res) => {
    const newItem = req.body.newItem;
    newItemlist.push(newItem);
    res.render("/");
});

  
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  