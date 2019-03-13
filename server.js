const express = require('express');
const app = express();
const path = require('path');
const profileData = require('./models/data');

const port = process.env.PORT || 8080;

//server client

app.use(express.static(path.join(__dirname, 'client')));

////server client

app.get('/data', (req, res, next) => {
    res.json(profileData);
});

app.get('/api', (req, res, next) => {
    //res.json({test: "hello"});
    res.sendFile(path.join(__dirname + '/views/index_api.html'));
});


app.get('/api/data', (req, res, next) => {
    res.status(200).json(profileData);
});



app.get('/api/:data', (req, res, next) => {
    res.status(200).json(profileData[req.params.data]);

});


app.listen(port, () => console.log(`Magic happening on port ${port}, ${new Date()}!`));
