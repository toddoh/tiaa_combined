const express = require('express');
const app = express();
const path = require('path');
const url = require('url');

process.env.NODE_ENV = 'dev';

hostn = 'https://thisisallabout.com/';
if (process.env.NODE_ENV == 'dev') {
    hostn = 'http://localhost:3000/';
}

// Serve the files on port 3000.
app.listen(3000, function () {
    console.log('thisisallabout app listening on port 3000!\n');
});

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/dataset/:id/:type', function (request, response) {
    if (request.params.type) {
        response.sendFile(path.join(__dirname, '/dataset/' + request.params.id + '/' + request.params.type));
    } else {
        response.sendFile(path.join(__dirname, '/dataset/' + request.params.id));
    }
});

app.get('/remote/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/remote/' + request.params.type));
});

app.get('/res/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/dist/res/' + request.params.type));
});

app.get('/*', function (request, response) {
    if (request.url.endsWith('.png') || request.url.endsWith('.ico') || request.url.endsWith('.jpg')) {
        response.sendFile(path.join(__dirname, '/dist/res/' + request.url.split('/')[1]));
    } else {
        if (request.url.split('/').length <= 2) {
            if (request.url.endsWith('/')) {
                response.redirect(301, request.url.slice(0, -1))
            } else {
                response.sendFile(path.join(__dirname, '/dist/index.html'));
            }
        } else {
            if (request.url.split('/')[1] == 'dataset') {
                response.sendFile(path.join(__dirname, '/dataset/' + request.url.split('/')[2]));
                return;
            }

            var param = '';
            if (request.url.split('/')[1] != '' && 
                request.url.split('/')[2] != null) param = '?type=' + request.url.split('/')[2]
            response.redirect(301, hostn + request.url.split('/')[1] + param)
        }
    }
});