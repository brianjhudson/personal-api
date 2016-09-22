const featureCtrl = require("./featureCtrl");
module.exports = app => {
  app.get("/api/name", featureCtrl.getName);
  app.get("/api/location", featureCtrl.getLocation);
  app.get("/api/occupations/latest", featureCtrl.getLatestOccupation);
  app.get("/api/occupations?", featureCtrl.getSortedOccupations);
  app.get("/api/occupations", featureCtrl.getOccupations);
  app.get("/api/hobbies", featureCtrl.getHobbies);
  app.get("/api/hobbies/:type", featureCtrl.getHobbyByType);
  app.put("/api/name", featureCtrl.setName);
  app.put("/api/location", featureCtrl.setLocation);
  app.post("/api/hobbies", featureCtrl.addHobby);
  app.post("/api/occupations", featureCtrl.addOccupation);
}
