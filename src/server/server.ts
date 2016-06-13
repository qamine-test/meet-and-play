require('source-map-support').install();
import express = require('express');
import path = require('path');
import {newsAPI} from './api/news';
import {playerAPI} from './api/player';
import {responseAPI} from './api/response';

var port: number = process.env.PORT || 8080;
var app = express();
var compression = require('compression');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/meet-and-play');

app.use(compression());
app.use(bodyParser.urlencoded({'extended': 'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());
app.use(express.static(path.resolve(process.cwd(), 'client/')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(process.cwd(), 'client/index.html'));
};
newsAPI(app);
playerAPI(app);
responseAPI(app);

app.get('/*', renderIndex);

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});
