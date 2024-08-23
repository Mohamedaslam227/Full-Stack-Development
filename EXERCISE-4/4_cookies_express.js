const express = require('express')
const parser = require('cookie-parser')

const app = express()

app.use(parser())

app.get('/setcookie', (req, res) => {
    res.cookie('my_cookie', 'Cookie in response')
    res.send('Cookie added')
})

app.get('/getcookie', (req, res) => {
    res.send(req.cookies)
})

app.listen(3000, (err) => {
    if (err) throw err;
	console.log('server running on port 3000');
})