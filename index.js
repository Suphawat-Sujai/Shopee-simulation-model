const express = require("express");
const path = require("path");
const app = express();
const exhdb = require('express-handlebars');

const logger = require("./middleware/logger");

// Init middleware
// app.use(logger);

// app.engine('handlebars', exhdb ({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// // home page routes
// app.get('/', (req ,res) => {
//     res.render('index');
// })

// body pares middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./routes/api/users'));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public' ,'index.html'));
// });

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
