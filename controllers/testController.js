// Test controller.js
const { testService } = require("../services/testService");
const testController = (req, res) => {
  try {
    testService();
    res.end();
  } catch (e) {
    next(e);
  }
};

module.exports = testController;
