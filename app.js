import Express from "express";

const app = Express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/balance", (req, res) => {

});

app.get("/withdraw", (req, res) =>{

});

app.post("/deposit", (req, res) => {

});





app.listen (port, () => console.log("lisening on port"))