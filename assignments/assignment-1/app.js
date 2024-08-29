const path = require("path");
const express = require("express");

const bodyParser = require("body-parser");

const userRoutes = require("./routes/users");
const rootRoute = require("./routes/home");
const notFoundRoute = require("./routes/notFound");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use(userRoutes);
app.use(rootRoute);
app.use(notFoundRoute);

const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
