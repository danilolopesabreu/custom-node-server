module.exports = (app) => {

    app.get('/', (req, resp) => {
        resp.send(`raiz blahhhh`);
    });
    
    app.get('/livros', (req, resp) => {
        resp.marko(
            require('../views/livros/lista/lista.marko'),
            {
                livros:[
                    {
                        id:1,
                        titulo:'Fundamentos do node'
                    },
                    {
                        id:2,
                        titulo:'Fundamentos de marko'
                    }
                ]
            }
        );
    });
}
