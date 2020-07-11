const express = require('express');
const db = require("./db/index.js");
const app = express()
app.use(express.json());
const port = 3000
let AccountsModel = db.AccountsModel;
app.post("/newAccount",(req,res)=>{
	const userName = req.body.userName;
	const email = req.body.email;
	const password = req.body.password;
	let accountDoc = new AccountsModel({
		userName:userName,
		email:email,
		password:password
	})
	accountDoc.save((err)=>{
		if(err){
			console.log(err);
			res.status(500).send(err)
		}else{
			res.status(201).send("Saved new account")
		}
	})
});

app.listen(port, () => console.log(`app listening at http://localhost:${port}`))