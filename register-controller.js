const Cryptr = require('cryptr');
const express = require("express");
const connection = require('./config');
cryptr = new Cryptr('myTotalySecretKey');

module.exports.register=function(req,res){
    const today = new Date();
    const encryptedString = cryptr.encrypt(req.body.password);
    const users = {
        "user_name": req.body.user_name,
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email_address": req.body.email_address,
        "password": req.body.password,
        "birth_date": req.body.birth_date,
        "phone_number": req.body.phone_number,
        "created_at": today,
        "updated_at": today
    };
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.json({
                status:true,
                data:results,
                message:'user registered successfully'
            })
        }
    });
}