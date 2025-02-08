import mysql from 'mysql2';
import express from 'express';

var app = express();
app.use(express.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'my_database'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    results.forEach(result => {
        console.log(result);
    });
});


