//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const loginCheck = require('./login_check')
const app = express()
const port = 3000

//set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  //console.log(req.body)
  const userInfo = loginCheck(req.body)
  const fault = 'Incorrect username or password.'
  const userInput = (req.body)

  if (userInfo.firstName !== undefined) {
    res.render('welcome', { userInfo: userInfo })
  } else {
    res.render('index', { userInput: userInput, fault: fault })
  }
})

//starts the express server and listening for connections.
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})