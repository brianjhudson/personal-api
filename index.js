const express = require("express");
const {json} = require("body-parser");

const app = express();
const port = 5000;
app.use(json());

const featureRoutes = require ('./features/feature/featureRoutes.js');
featureRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
