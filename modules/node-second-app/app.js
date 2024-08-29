const http = require("http");
const router = require("./routes");

const server = http.createServer(router);

const port = 3000;
server.listen(port, "127.0.0.1", () =>
  console.log(`Listening on port ${port}`)
);
