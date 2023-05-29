const express = require("express");
const app = express();
app.use(express.json());
app.use(
  (addActiveTime = (req, res, next) => {
    let requestAt = new Date().getHours();
    let day = new Date().getDay();
    if (requestAt < 9 || requestAt > 17 || day == 0 || day == 6) {
      res.sendFile(__dirname + "/public/Closed.html");
    } else {
      next();
    }
  })
);

app.use(express.static("public"));

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if (err) console.log("server is not running");
  else console.log(`server is running on port ${port}...`);
});
