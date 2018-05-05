const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const auth_routes = require('../routes/api/auth_routes');

// API Routes
router.use("/api", apiRoutes);


// I don't think this is being used correctly...
router.use('/auth_routes', auth_routes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
