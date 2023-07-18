const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/routeAPI'));
app.use('/', require('./routes/htmlAPI'));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

module.exports = app;