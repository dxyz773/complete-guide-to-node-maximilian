const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");
  next();
});

app.use("/test", (req, res, next) => {
  res.send("<h2>Hello from Test!</h2>");
});
app.use("/", (req, res, next) => {
  res.send("<h2>Hello from Express!</h2>");
});

const port = 3000;

app.listen(port, "127.0.0.1", () =>
  console.log(`Listening on port ${port}...`)
);
