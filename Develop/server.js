const express = require('express');
const app = express();
const PORT = 3003;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', require('./routes/apiRoutes'));
app.use('/', require('./routes/htmlRoutes'));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

module.exports = app;