const express = require("express");
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

app.use(cors({
    origin: "*"
}));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(fileUpload());
app.use(express.static('public'));
//import
// const controller1 = require("./controller/controller1");



// app.use("/BEST" , controller1);

app.get("/" , (req , res) => {
    let test = {best : 'test' , test : 'best'}
    res.send(test);
});

app.post("/upload" , (req, res) => {


    console.log(req.files)
    let sampleFile = req.files.file;
    sampleFile.mv("./public/image/"+ sampleFile.name, function(err) {
    });

    res.send(sampleFile.name);
});


app.listen(7890 , ()=> {
    console.log("start Server");
})