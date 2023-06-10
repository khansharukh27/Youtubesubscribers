const express = require('express')

const app = require('./app.js')

 require('./createDatabase')
const port = 5000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
