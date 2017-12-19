const express =  require('express');
const bodyParser =  require('body-parser');
const logger = require('morgan');
const errorhandler = require('errorhandler');

const routes  =  require('./routes/index');


let app = express();
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.use('/', routes);

app.listen(3000);
