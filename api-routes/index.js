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

    app.put('/obras/:index', function(request, response){
        const index = request.params.index;
        //Find index of specific object using findIndex method.    
        objIndex = obras.findIndex((obj => obj.id == index));

        if (index !== request.body.id){
            response.status(400).send('Id diferente');
        }
        else{
            //Update object's property.
            obras[objIndex] = request.body;
            //Log object to console again.
            console.log("After update: ", obras[objIndex])
            response.send("As propriedades da obra"+ objIndex +" foram alteradas !")

        }

    })
            

}
