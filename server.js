
const express = require('express');
const app =	express();
var date_time = new Date();
console.log(date_time);

app.use(express.json());
//app.use(cors({origin: true}));
app.listen(3001, () =>{
	console.log("Server started");
	
});

let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

// get current hours
let hours = date_time.getHours();

// get current minutes
let minutes = date_time.getMinutes();

// get current seconds
let seconds = date_time.getSeconds();

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
let date_json = {"year": year,
				 "month": month,
				 "date": date,
				 "hour": hours,
				 "minute": minutes
				}
app.get('/get', (req, res)=>{
	res.send(date_json);
})

