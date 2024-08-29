const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const notFoundRoute = require("./routes/not-found");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(notFoundRoute);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${3000}`));
