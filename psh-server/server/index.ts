import { createConnection } from "typeorm";
import routes from './routes';
import express from "express";
import cronJobs from './cron-jobs'

const hostname = 'localhost';
const port = 3000;

const app = express();
var cors = require('cors');
app.use(cors());

//createDB connection
createConnection()
    .then(connection => {
        routes(app);
        cronJobs.forEach((job)=>{
            job.start();
        })
        app.listen(3000, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
        });
    })
    .catch(err => console.log("Error while connecting to DB", err));