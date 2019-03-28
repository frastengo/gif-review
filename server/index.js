const express = require('express');
const bodyParser = require('body-parser');
const aC = require('./controllers/animationController');
const app = express();

app.use(bodyParser.json());

app.get('/api/animations', aC.getAnimations);
app.delete('/api/animations/:id', aC.deleteAnimation)

const PORT = 4000;
app.listen(PORT, () => console.log(`Surfin on the coolest port around, ${PORT}`));