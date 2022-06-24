var express = require('express');
var app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/api/users'))

var server = app.listen(8081, () => {
    var port = server.address().port
    console.log("app listening at http://localhost:%s", port);
})