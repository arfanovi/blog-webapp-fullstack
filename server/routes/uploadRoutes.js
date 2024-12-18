
const express = require('express');
const router = express.Router();

router.get('/upload', (req, res) => {
  res.status(200).send("Upload route working");
});

module.exports = router;
