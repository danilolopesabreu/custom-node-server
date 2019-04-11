module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(`raiz`);
    });
    
    app.get('/livros', (req, resp) => {
        resp.send(`livros`);
    });
}
