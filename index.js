const express = require('express');
const app = express();
const port = 9090;
const expressLayouts = require('express-ejs-layouts');

// Add static folder
app.use(express.static('./assets'));

// use layouts before routes so its render first
app.use(expressLayouts);

// extract styles and scripts
app.set('layout extractStyles' ,true);
app.set('layout extractScripts' ,true);

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