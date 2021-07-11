const router = require("express").Router();
const { emoji } = require("conmaster.js");
const path = require('path');

router.get("/", function (req, res) {
    res.sendfile('public/index.html');
})

module.exports = router;