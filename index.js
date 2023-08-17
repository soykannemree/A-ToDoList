import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

let newItems=[];

app.get("/", (req, res) => {
    res.render("index.ejs",{
        newListItems: newItems,
    });
});


app.post("/submit", (req, res) => {
    let newItem = req.body["newItem"];
    newItems.push(newItem);
    console.log(newItems);
    res.render("index.ejs",{
        newListItems: newItems,
    });
});

  
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  
