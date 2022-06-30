const express = require('express')
const mysql = require('mysql')

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

const app = express()

// Insert
app.get('/user_register', (req, res) => {
    let addUser = {
        user_name: 'admin',
        first_name: 'admin',
        last_name: 'admin',
        email_address: 'admin@admin.com',
        password: 'adminadmin',
        phone_number: '2222222',
        birth_date: '2017-02-04',
        created_at: '2017-02-04',
        updated_at: '2017-02-04',
    }

    let sql = 'INSERT INTO users SET ?'
    db.query(sql, addUser, (err, result) => {
        if (err) {
            throw err
        } else {
            res.send('User Registered')
        }
    })
})

app.listen('2222', () => {
    console.log('Server started on Port http://localhost:2222')
})