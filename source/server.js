module.exports = class Server{
    constructor(){
        //dependances
        this.path = require('path');
        this.Twig = require("twig");
        this.express = require('express');
        this.app = this.express();
    }

    run(){
        try{
            //config project
            const ROOT_PATH = this.path.resolve('./');
            const WWW_PATH = ROOT_PATH + '/public';

            //config app object
            this.app.set("twig options", {
                allow_async: true, // Allow asynchronous compiling
                strict_variables: false
            });
            this.app.set("views", ROOT_PATH + '/source/views');

            //middleware
            this.app.use(this.express.static('public'));

            //routes
            this.app.get('/', function (req, res) {
                let grid = [
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                ];
                res.render('pages/index.twig', {
                    data : grid
                });
            });

            //execute
            this.app.listen(3000);
        }catch(err){
            console.error('error system ====> ', err);
        }
    }
}
