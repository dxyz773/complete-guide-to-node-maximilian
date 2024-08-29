const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>MY first node js</title><head><body><h2>Enter Message</h2><div><form action='/message' method='POST'><input name='message' type='text'></input> <button type='submit'>Send</button></form></div></body></html>"
    );

    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();

      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message.replaceAll("+", " "), (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.end();
});

const port = 3000;
server.listen(port, "127.0.0.1", () =>
  console.log(`Server running on port ${port}`)
);
