const featureCtrl = require("./featureCtrl");
module.exports = app => {
  app.get("url", getFunc);
}
