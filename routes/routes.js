const express =  require('express')
const path = require('path')
const router = express.Router()

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', '/index.html'))
})

router.get('/register(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', '/register.html'))
})

console.log(path.join(__dirname, '..', 'views', '/register.html'))

module.exports = router