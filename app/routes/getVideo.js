module.exports = function(app) {


    app.get('/video/:name', function(req, res) {
        let requestedName = req.params['name'];
        app.app.controllers.getVideo.getVideo(app, req, res, requestedName);
    });

}