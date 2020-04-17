const express = require("express");
const jwt = require("express-jwt");
const app = express();

const PORT_NB = 3000;
const sucessMessage = "Hello reforged team";

app.use(function handleErrorMiddleware(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(403).send("invalid token...");
  }
  next();
});

// Here we check jwt
app.use(
  jwt({
    secret: "qwertyuiopasdfghjklzxcvbnm123456",
    credentialsRequired: false,
  })
);

// Main endpoint of the api
app.get("/", function mainEndpoint(req, res) {
  if (!req.user || req.user.Role !== "user") {
    return res.status(403).send("Cannot access reforged api anonymously 🤕");
  }
  res.send({ user: req.user.Role, message: sucessMessage });
});

app.listen(PORT_NB, function startApi() {
  process.stdout.write(
    `\n 🚀 Reforged api started at http://localhost:${PORT_NB} \n`
  );
});
