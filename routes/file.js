var express = require('express');
var db = require('../modules/db');
var upload = require('../modules/upload');
var router = express.Router();

/* POST /image */
router.post('/hwpfile', upload.single('hwpfile'), function(req, res) {
    res.send(JSON.stringify(req.file));
});

module.exports = router;

