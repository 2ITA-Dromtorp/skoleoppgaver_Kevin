const express = require('express')
const app = express()
const port = 3001
var mysql = require('mysql');
var cors = require('cors');
const { request } = require('http');
var bodyParser = require('body-parser')

app.use(cors())
// parse application/json
app.use(bodyParser.json())

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'KvinDromtorp',
  password: 'Skole123!',
  database: 'dromtorp'
});




app.get('/', (request, response) => {

  connection.connect(function(err) {

    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM elev', function (error, results, fields) {
    if (error) throw error;
    response.send(JSON.stringify(results));
  });

  
  
})

app.post("/deleteuser", (request, response) => {
  let data = request.body;
  c
  
  response.send('This is a post request');
})

app.get("/updateuser/:newhobby/:id", (request, response) => {
  // Eksempel på URL
  // http://localhost:3001/updateuser/Klatring/4
  let newhobby = request.params.newhobby;
  let id = request.params.id;
  console.log(newhobby);
  let sqlquery = 'UPDATE elev SET hobby=? WHERE ElevID=?';

  connection.query(sqlquery, [newhobby, id], function (error, results, fields) {
    if (error) throw error;
    response.send('ElevID '+ id +' er oppdatert med hobby '+ newhobby );
  });
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/testing', async (req, res) => {
  
})

