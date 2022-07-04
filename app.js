const express = require('express')
const mysql = require('mysql')
const app = express()
const path = require('path')
const routes = require('./routes/routes')

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
app.use('/routes', routes)


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
// app.post('/user_register', (req, res) => {
//     let addUser = {
//         user_name: 'admin',
//         first_name: 'admin',
//         last_name: 'admin',
//         email_address: 'admin@admin.com',
//         password: 'adminadmin',
//         phone_number: '2222222',
//         birth_date: '2017-02-04',
//         created_at: '2017-02-04',
//         updated_at: '2017-02-04',
//     }
//
//     checkParameters(addUser)
//
//     let sql = 'INSERT INTO users SET ?'
//     db.query(sql, addUser, (err) => {
//         if (err) {
//             throw err
//         } else {
//             res.redirect( '/')
//         }
//     })
// })

app.listen('2222', () => {
    console.log('Server started on Port http://localhost:2222')
})