const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write(`
      <html>
        <body>
          <form action="/mes" method="POST">
            <input type="text" name="name" />
            <button type="submit">Send</button>
          </form>
        </body>
      </html>
    `);

    return res.end();
  }

  if (url === "/mes" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error writing file");
          return;
        }

        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }
};

module.exports = requestHandler;