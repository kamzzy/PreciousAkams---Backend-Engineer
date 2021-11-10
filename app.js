const express = require('express');
const app = express()
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.engine('handlebars', exphbs({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set('view engine', 'handlebars');
app.get('/', (req, res) => {
  res.render('events-index', { events: events });
})
app.post('/events', (req, res) => {
  console.log(req.body);
})
app.get('/events/new', (req, res) => {
  res.render('events-new', {});
})











// OUR MOCK ARRAY OF PROJECTS
var events = [
  { title: "I am your first event", desc: "A great event that is super fun to look at and good", imgUrl: "https://res.cloudinary.com/wonderwoman/image/upload/v1602605945/myportfolio/EVENTS_asqlwb.png" },
  { title: "I am your second event", desc: "A great event that is super fun to look at and good", imgUrl: "https://res.cloudinary.com/wonderwoman/image/upload/v1602605945/myportfolio/EVENTS_asqlwb.png" },
  { title: "I am your third event", desc: "A great event that is super fun to look at and good", imgUrl: "https://res.cloudinary.com/wonderwoman/image/upload/v1602605945/myportfolio/EVENTS_asqlwb.png" }
]










app.listen(port, () => {
    console.log('server is running on port 3000');
})