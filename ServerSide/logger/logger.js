const winston = require('winston');
//This is all just for the logger
const timezoned = () =>{
    return new Date().toLocaleString('en-US', {
        timeZone: 'America/Chicago'
    });
}

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({format: timezoned}),
        winston.format.json()
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        new winston.transports.File({filename: 'logs/activity.log', level: 'info'})
    ],
});

module.exports = logger;