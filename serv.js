const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.static('public'));
const mysql = require('mariadb/callback');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'password',
        database: 'POI'});

con.connect( err=> {
    if(err) {
            console.log(`Error connecting to mariadb: ${err}`); //log error, cite the error
            process.exit(1); //quit with exit code 1
    } else { 
        console.log('connected to mariadb ok');
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

        
    }    
});
app.listen(3000);