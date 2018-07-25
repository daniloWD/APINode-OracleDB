module.exports.setAllMusics = function(app, req, res) {

    var dadosForm = req.body;
   
    var Connection = app.config.mongodbConnection();
    var MongodbMusicsDAO = new app.app.models.MongodbMusicsDAO(Connection);
    MongodbMusicsDAO.setAllMusics(req,res, dadosForm);

};