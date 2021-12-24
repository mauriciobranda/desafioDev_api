const bodyParser = require('body-parser');

const obras = [];

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/obras', (request, response) => response.send(obras));

    app.post('/obras', function(request, response){
        const id = request.params.id;

        //const idExiste = obras.some(obra => obra.id === id);
        //console.log(idExiste); // true

        const obra = request.body;
        obras.push(obra);
        response.send('Post titulo')
        
    });

    app.put('/obras/:id', function(request, response){
        const id = request.params.id;
        const obra = request.body;
        obras[id] = obra;
        console.log(obra);
        response.send('Put titulo')
    })
    

}
