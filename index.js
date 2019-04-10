const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express();
app.use(bodyParser.json());
app.use(cors());
require('./routes/riotGamesRoutes')(app)

if (process.env.NODE_ENV === "production") {
    app.use(express.static('clientApp/build'))

    const path = require('path')
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'clientApp', 'build', 'index.html'))
    })
}

const PORT = process.env.PORT || 3001;
app.listen(PORT);