import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/" , (req,res) => {
    return res.send("Hello world 3!!");
});

app.post("/webhook", (req,res)=> {

    console.log(req.body);

    return res.json(req.body);
})

app.listen(3000, () => {
    console.log("Running server");
})
