const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Use "main" as our default layout
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
    res.render('home', { msg: 'Handlebars are Cool!' });
  })










app.listen(port, () => {
    console.log('server is running on port 3000');
})