var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).json("Server is up and running")
});

router.post('/generate', (req, res, next)=> {
  console.log(req.body);
  res.status(200).json({
    message: "It is working"
  })
})

module.exports = router;
