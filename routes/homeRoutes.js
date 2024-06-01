// routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', (req, res) => {
    homeController.getHomePage(req, res); // Assicurati di passare req e res
});

module.exports = router;
