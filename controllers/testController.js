const { testService } = require("../services/testService");
const testController = (req, res) => {
  testService();
  res.end();
};

module.exports = testController;
