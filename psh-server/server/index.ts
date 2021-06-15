import { createConnection } from "typeorm";
import routes from './routes';

const express = require("express");
const cron = require("node-cron");

const hostname = 'localhost';
const port = 3000;

const app = express();

const axios = require("axios");
cron.schedule('*/5 * * * *', async () => {
    console.log('running a task every 5 minutes');
    let response = await axios.get('https://randomuser.me/api?results=10');
    console.log(response.data);
    // let users = [];
    // for(let user of response.results){
    //     //Map to Player[]
    // }
    //Get random players from db
    //Create game
    //Create stats for each rand player
    //update game with stats
});

//createDB connection
createConnection()
    .then(connection => {
        routes(app);

        app.listen(3000, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    })
    .catch(err => console.log("Error while connecting to DB", err));