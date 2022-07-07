const router = require("express").Router();
const Twitter = require("twitter");

const client = new Twitter({
  consumer_key: process.env.TWITTER_API_KEY,
  consumer_secret: process.env.TWITTER_API_KEY_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

router.get("/search", async (req, res, next) => {
  try {
    const q = req.query.q;
    const results = await client.get("search/tweets.json", { q, count: process.env.TWITS_AMOUNT });

    res.send(results);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
