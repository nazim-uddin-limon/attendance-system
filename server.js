require("dotenv").config();
const http = require("http");
const app = require("./app/app");
const dbConnection = require("./db/connection");
const PORT = process.env.PORT;

const server = http.createServer(app);

server.listen(PORT, () => {
  dbConnection();
  console.log(`Server is listenign on port ${PORT}`);
});
