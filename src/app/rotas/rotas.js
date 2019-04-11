module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(`raiz blahhhh`);
    });
    
    app.get('/livros', (req, resp) => {
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
}
