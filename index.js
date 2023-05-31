const express = require("express");

const app = express();

app.use("/", (req, res) => {
    res.send("Server is starting!")
});

app.listen(80);