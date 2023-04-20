require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
let { loggerInfo } = require("./utils/logs");
const { schema } = require("./graphql/schema");
const { root } = require("./graphql/root");

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Desafío reformar para usar con Graphql ruta ----> /graphql");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  loggerInfo.info(`Server on http://localhost:${PORT} || PID: ${process.pid}`);
});

module.exports = app;
