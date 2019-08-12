const mysql = require('mysql')

module.exports = connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'explori_devtest2'
});

// module.exports = function() {
//     connection.connect(function(err) {
//         if (err) {
//             console.error('error connecting: ' + err.stack);
//             return;
//         }
    
//         console.log('connected as id ' + connection.threadId);
//     });
// }