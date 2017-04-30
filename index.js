const express        = require('express');
const app            = express();
const methodOverride = require('method-override');
const bodyParser     = require('body-parser');
const mongoose       = require('mongoose');
const cors           = require('cors');
const config         = require('./config/config');
const router         = require('./config/routes');
const requestIp      = require('request-ip');

//connection to the DB
mongoose.Promise = global.Promise;
mongoose.connect(config.db, (err) => {
  if(err) console.log(`Connection error: ${err}`);
  else return console.log(`Connected to db: ${config.db}`);
});

const ipMiddleware = function(req, res, next) {
    const clientIp = requestIp.getClientIp(req);
    next();
};

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(methodOverride((req) => {
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(requestIp.mw())

app.use(function(req, res) {
    const ip = req.clientIp;
    res.end(ip);
});

app.use('/', router);

app.listen(config.port, () => console.log(`Started on port: ${config.port}`));
