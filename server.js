const express = require("express");
const logger = require("morgan");

const PORT = process.env.PORT || 80;

const app = express();
app.use(logger("combined"));

app.use("/json", (req, res) => {
  res.status(200).send({ ip: req.ip });
});

app.use((req, res) => {
  res
    .status(200)
    .send(`<html><h1>whatsmyip</h1><p>IP address: ${req.ip}</p></html>`);
});

app.listen(PORT, () => {
  console.log(`Listening for connections on port ${PORT}`);
});
