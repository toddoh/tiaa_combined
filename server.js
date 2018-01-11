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
    console.log('Example app listening on port 3000!\n');
});

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/dataset/:id/:type', function (request, response) {
    response.sendFile(path.join(__dirname, '/dataset/' + request.params.id + '/' + request.params.type));
});

app.get('/*', function (request, response) {
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
});