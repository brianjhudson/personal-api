const featureCtrl = require("./featureCtrl");
module.exports = app => {
  app.get("/api/name", featureCtrl.getName);
  app.get("/api/location", featureCtrl.getLocation);
  app.get("/api/occupations/latest", featureCtrl.getLatestOccupation);
  app.get("/api/occupations?", featureCtrl.getSortedOccupations);
  app.get("/api/occupations", featureCtrl.getOccupations);
  app.get("/api/hobbies", featureCtrl.getHobbies);
  app.get("/api/hobbies/:type", featureCtrl.getHobbyByType);
}
