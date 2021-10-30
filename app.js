const express = require('express');
const app = express();
const cors = require('cors');


// Start up the Express functions to listen on server side
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Response from Generic backend server, Now updated');
});

const port = process.env.PORT || 5000;
app.listen(port, (error) => {
    if (error) {
        return console.log('Error: ' + err);
    }
    console.log(`Server listening on ${port}...`)
});