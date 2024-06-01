// controllers/homeController.js

exports.getHomePage = (req, res) => {
    
    res.render('index', { message: 'Homepage'});
};


