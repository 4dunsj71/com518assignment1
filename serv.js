const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));
const mysql = require('mariadb/callback');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const expressSession = require('express-session');
const MySQLStore = require('express-mysql-session')(expressSession);
const con = require('./mysqlconn');
//const sessionStore = new MySQLStore({ } , con.promise());
/*app.use(expressSession({
    // Specify the session store to be used.
    store: sessionStore, 

    // a secret used to digitally sign session cookie, use something unguessable (e.g. random bytes as hex) in a real application.
    secret: 'BinnieAndClyde', 

    // use as recommended by your chosen session store - related to internals of how session stores work
    resave: false, 

    // save session to store before modification
    saveUninitialized: false, 

    // reset cookie for every HTTP response. The cookie expiration time will be reset, to 'maxAge' milliseconds beyond the time of the response. 
    // Thus, the session cookie will expire after 10 mins of *inactivity* (no HTTP request made and consequently no response sent) when 'rolling' is true.
    // If 'rolling' is false, the session cookie would expire after 10 minutes even if the user was interacting with the site, which would be very
    // annoying - so true is the sensible setting.
    rolling: true, 

    // destroy session (remove it from the data store) when it is set to null, deleted etc
    unset: 'destroy', 

    // useful if using a proxy to access your server, as you will probably be doing in a production environment: this allows the session cookie to pass through the proxy
    proxy: true, 

    // properties of session cookie
    cookie: { 
        maxAge: 600000, // 600000 ms = 10 mins expiry time
        httpOnly: false // allow client-side code to access the cookie, otherwise it's kept to the HTTP messages
    }
}));*/
        //routes go here
        app.get('/POI/:region', (req, res) => {
            con.query(`SELECT * FROM pointsofinterest WHERE region=?`,[req.params.region],(error,results,fields)=>{
                if(error){
                    res.status(500).json({error: error});
                } else {
                    res.json(results);
                }
            });
        });
    
        app.post('/newpoi', (req, res) => {
            
            con.query (`INSERT INTO pointsofinterest(name,type,country,region,lon,lat,description,recommendations) VALUES(?,?,?,?,?,?,?,?)`,
                        [req.body.name,
                         req.body.type,
                         req.body.country,
                         req.body.region,
                         req.body.lon,
                         req.body.lat,
                         req.body.description,
                         req.body.recommendations],
                (error, results, fields) => {
                    if (error) {
                        res.status(500).json({
                            error: error
                        });
                    } else {
                        res.json({
                            success: 1    
                        });
                    }
                });
            });
        
        app.post('/recommend/:id', (req, res) => {
        
            con.query (`UPDATE pointsofinterest SET recommendations = recommendations+1 WHERE ID=?`,[req.params.id],
                (error, results, fields) => {
                    if (error) {
                        res.status(500).json({
                            error: error
                        });
                    } else {
                        res.json({
                            success: 1    
                        });
                    }
                }
            );
        });

        app.post('/login', (req, res) => {
            var user = request.body.user;
            var pass = request.body.pass;
            if (user && pass) {
                connection.query('SELECT * FROM poi_users WHERE username = ? AND password = ?', [user, pass], function(error, results, fields) {
                    if (results.length > 0) {
                        req.session.login = true;
                        req.session.user = user;
                        
                    }      
                    
                });
            } 
        });

        app.post('/logout',(req,res)=>{
            if(req.session.login != ""){
                req.session = null;
            };
        });
        
        app.post('/auth', function(request, response) {
            var username = request.body.username;
            var password = request.body.password;
            if (username && password) {
                connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
                    if (results.length > 0) {
                        request.session.loggedin = true;
                        request.session.username = username;
                        response.redirect('/home');
                    } else {
                        response.send('Incorrect Username and/or Password!');
                    }            
                    response.end();
                });
            } else {
                response.send('Please enter Username and Password!');
                response.end();
            }
        });

app.listen(3000);