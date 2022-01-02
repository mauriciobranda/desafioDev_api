const bodyParser = require('body-parser');

const obras = [];

module.exports = app => {
    app.use(bodyParser.json());
    app.get('/obras', (request, response) => response.send(obras));
    
    app.post('/obras', function(request, response){
        const obra = request.body;
        //console.log(obra.id)

        objIndex = obras.findIndex((obj => obj.id == obra.id));
        if (objIndex < 0) {
            //console.log('Registro nao existe')
            obras.push(obra);
            response.status(201).send(obra);
        } else {
            //console.log('Registro ja existe')
            response.status(200).send('Registro ja existe');
        }
    });

    app.put('/obras/:index', function(request, response){
        const index = request.params.index;
        const obra = request.body;
        //Find index of specific object using findIndex method.    
        objIndex = obras.findIndex((obj => obj.id == index));

        if (objIndex > -1) {
            obras[objIndex] = obra;
            response.send('Put titulo')
        }else{
            response.status(400).send('Obj n encontrado');
        }

    })

    app.delete('/obras/:index', function(request, response){
        const index = request.params.index;  
        objIndex = obras.findIndex((obj => obj.id == index));

        if (objIndex > -1) {
            obras.splice(objIndex, 1);
            response.send("A obra foi deletada !")
        }else{
            response.status(400).send('Obj n encontrado');
        }
    })
            

}
