const router = require("express").Router();
const thumbnailRoutes = require("./thumbnail");
const cafeRoutes = require("./cafe");
const userRoutes = require("./User");
const authRoutes = require("./auth_routes");

// Thumbnail routes
router.use("/thumbnail", thumbnailRoutes);
router.use("/cafe", cafeRoutes);
router.use("/user", userRoutes);
router.use("/authroutes", authRoutes);

module.exports = router;
