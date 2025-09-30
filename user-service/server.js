const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello from User Service 👤'));

app.listen(3001, () => console.log('User service running on port 3001'));
