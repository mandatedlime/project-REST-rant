require('dotenv').config()
const express = require('express')
const app = express();
const PORT = process.env.PORT || '8080';
const methodOverride = require('method-override')


// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set("port", PORT);


app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home');
})

app.get('*', (req,res) => {
    // res.status(404).send('<h1>404 Page</h1>')
    res.render('error404')
})

app.listen(process.env.PORT || 8080);
