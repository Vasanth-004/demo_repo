import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/" , (req,res) => {
    return res.send("Hello world!!");
});

app.post("/webhook", (req,res)=> {
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("Running server");
})
