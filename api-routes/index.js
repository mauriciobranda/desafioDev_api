const bodyParser = require('body-parser');


const obras = ["Saab", "Volvo", "BMW"];


module.exports = app => {
    app.use(bodyParser.json());
    app.get('/obras', (req, res) => res.send(obras));

}
