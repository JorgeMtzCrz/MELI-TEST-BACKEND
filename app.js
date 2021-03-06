require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: [process.env.FRONTENDPOINT]
    })
);
app.use(
    require("node-sass-middleware")({
        src: path.join(__dirname, "public"),
        dest: path.join(__dirname, "public"),
        sourceMap: true
    })
)

app.use(express.static(path.join(__dirname, 'public/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const api = require('./routes/api');
app.use('/api', api);

// Uncomment this line for production
app.get('/*', (req, res) => res.sendFile(__dirname + '/public/build/index.html'));

module.exports = app;