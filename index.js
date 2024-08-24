const express = require('express');
const app = express();
const port = 9090;


// use express router from router dir
app.use('/',require('./ routes'));

// Setting a view engine for templates
app.set('view engine', 'ejs');
app.set('views' ,'./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port and working fine: ${port}`);


})