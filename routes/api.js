const router = require("express").Router();
const path = require("path")
const fs = require("fs")
const EMOJI_DATA = path.join(__dirname, '../data/emojis.json');


router.get("/emojis", function (req, res, next) {
    fs.readFile(EMOJI_DATA, function(err, data){
        if(err) process.exit(1);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.json(JSON.parse(data));
      })
})

module.exports = router;