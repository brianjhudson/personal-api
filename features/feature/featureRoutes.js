const featureCtrl = require("./featureCtrl");
module.exports = app => {
  app.get("/api/name", getName);
  app.get("/api/location", getLocation);
  app.get("/api/occupations", getOccupations);
  app.get("/api/occupations/latest", getLatestOccupation);
  app.get("/api/getHobbies", getHobbies);
  app.get("/api/hobbies/:type", getHobbyByType);
}
