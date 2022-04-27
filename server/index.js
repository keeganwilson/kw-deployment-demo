const express = require('express');
const path = require('path');

const app = express();

app.get('/', (res, req) => {
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4005

app.listen(4005, () => {console.log(`Listening on port ${port}`)})

