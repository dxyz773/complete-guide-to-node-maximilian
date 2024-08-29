const handler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<html><head><title>Second node app</title></head><body><h1>Welcome to my 2nd Node app!</h1><div><p>Add new user</p><form action="/create-user" method="POST"><input type="text" name="username"></input><button type="submit">Add</button></form></div></body></html>'
    );
    return res.end();
  }

  if (url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.write(
      "<html><head><title>Second node app</title></head><body><h2>Users</h2><div><ul><li>Macklemore</li><li>Kehlani</li><li>Llunr</li></ul></div></body></html>"
    );
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunck) => body.push(chunck));
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const username = parsedBody.split("=")[1];
      console.log(username);
      res.statusCode = 201;
      return res.end();
    });
  }
  res.end();
};

module.exports = handler;
