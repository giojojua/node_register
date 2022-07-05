const express = require('express')
const mysql = require('mysql')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const routes = require('./routes/routes')

// app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}));

// Create Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'nosferatu1',
    database: 'project_db',
    port: '3306'
})


// Connect
db.connect((err) => {
    if (err) {
        console.log(err)
        throw err
    } else {
        console.log('Database Connected')
    }
})

app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/routes', express.static(path.join(__dirname, 'public')))
app.use('/', routes)


// check
// function checkParameters(userParameters) {
//     db.query("SELECT * FROM users", function (err, result) {
//         if (err) {
//             throw err
//         } else {
//             console.log(userParameters)
//             console.log(result)
//         }
//     })
// }

// Insert
app.post('/user_register', (req, res) => {
    let addUser = req.body

    addUser.created_at = '2017-02-04'
    delete (addUser.password_confirm)

    const errorList = {}

    if (addUser.password.length < 8) {
        errorList.password = 'Password must be more then 8 characters'
    }
    if (addUser.user_name.length < 3) {
        errorList.user_name = 'Username must be more then 2 characters'
    }
    if (addUser.phone_number.length !== 9) {
        errorList.phone_number = 'Phone number must be 9 digit'
    }

    if (errorList['key'] == null) {
        let sql = 'INSERT INTO users SET ?'
        db.query(sql, addUser, (err) => {
            if (err) {
                throw err
            } else {
                res.redirect('/')
            }
        })
    } else {
        res.redirect('/register')
    }
})

app.listen('2222', () => {
    console.log('Server started on Port http://localhost:2222')
})