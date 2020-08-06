module.exports = (app) => {
    
    app.get('/', function(req, resp) {
        resp.marko(
            require('../views/teste/index.marko')
            );
    });
    
    app.get('/memory_usage', function(req, resp) {
        resp.marko(
            require('../views/teste/memoria/memoria.marko')
        );
    });
};

