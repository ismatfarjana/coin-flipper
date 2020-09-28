var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  const side = chooseside();
  res.send(`you got ${side}`);
});

router.get("/:someNumber", function(req, res, next) {
  req.params = { someNumber: 10 };
  flipCount = req.params.someNumber;
  // res.send("yay!");
  let heads = [];
  let tails = [];

  for (i = 0; i < flipCount; i++) {
    const side = chooseside();
    console.log(side);
    side == "heads" ? heads.push(side) : tails.push(side);
  }
  res.json({
    heads: `${heads.length}`,
    tails: `${tails.length}`
  });
});

const chooseside = () => {
  const messages = ["heads", "tails"];
  const randomIndex = Math.round(Math.random() * 10) % 2;
  console.log("-------");
  console.log(randomIndex);
  return messages[randomIndex];
};

module.exports = router;
