
const express = require("express");
const router = express.Router();
const db = require("../Database");


router.get("/" , async (req , res) => {
    const data = await db.query("select * from tbl_country");
    res.send(data[0].length);
});

module.exports = router;

