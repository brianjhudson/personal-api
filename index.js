const express = require("express");
const {json} = require("body-parser");
const middleware = require("./middleware/middleware")

const app = express();
const port = 5000;
app.use(json());
app.use(middleware.addHeaders);

const featureRoutes = require ('./features/feature/featureRoutes.js');
featureRoutes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
