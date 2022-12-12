const express = require('express');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = 3000;
const route = require('./routes/index.route');

// handle static file
// Nhung file tinh no se lao vao file public
app.use(express.static(path.join(__dirname, 'public')));
// add middleware
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//http logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', engine({ extname: '.hbs' }));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH: ', path.join(__dirname, 'resources/views'));

// route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
<<<<<<< HEAD
console.log("conflict gio no khac nhau ne");
=======
console.log("conflict Chang file for conflict");
>>>>>>> a54a1158d22c18ebb3497db4c419ccc35347ba3f
