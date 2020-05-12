const express = require('express');
const app = express();

let port = process.env.port || 5000 ;

app.get('/',(req,res) => res.send('Hope this application runs'));

app.listen(port, () => console.log('server is listening ',port));