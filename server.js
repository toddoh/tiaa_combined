const express = require('express');
const app = express();
const path = require('path')


// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

app.use(express.static(path.join(__dirname, '/dist/')));
app.get('/*', function(request, response){
    const type_url = request.query.type
    response.sendFile(path.join(__dirname, '/dist/index.html'));
});