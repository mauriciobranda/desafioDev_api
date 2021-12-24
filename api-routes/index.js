const bodyParser = require('body-parser');

const obras = ["Saab", "Volvo", "BMW"];

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/obras', (req, res) => res.send(obras));

    app.post('/obras', function(request, response){
        
        const obra = request.body;
        obras.push(obra);
        response.send('Post titulo')
        
    });

}
