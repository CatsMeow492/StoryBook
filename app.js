const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require('./config/db')

// Load config

dotenv.config({ path: './config/config.env'})

// Connect to database

connectDB()

const app = express()

// Logging

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// The following example sets up an Express app to use .hbs as the file extension for views

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 3000

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`)
)