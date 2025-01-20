import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});
app.get("/contact",(req,res)=>{
    res.render("contact.ejs");
});
app.get("/about",(req,res)=>{
    res.render("about.ejs");
});

app.post("/submit", (req, res) => {
    var c=req.body["name"];
    var d=req.body["email"];
    var e=req.body["text"];
    var arr={"name":c , "email":d ,"text":e};
    console.log(arr);
    res.render("index.ejs");
  
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});