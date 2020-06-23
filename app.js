//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//midleware 
const bodyParser = require('body-parser');
const app = express();
 
//set dynamic views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder 
app.use(express.static('public'));
//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
  	name : "dedy teguh "
  });
});
//route untuk menampilkan form 
app.get('/post',(req,res)=>{
	res.render('form');
});
//route submit 
app.post('/post',(req,res)=>{
	//render file
	res.render('index',{
		name : req.body.textname
	});
});

app.get('/:name',(req,res)=>{
	res.render('index',{
		name : req.params.name
	});
});
//route untuk halaman about
app.get('/about',(req, res) => {
	res.render('index',{
		name :req.params.name
	});
  res.send('This is about page');
});
 
// belajar tambahan 
app.get('/tentang',(req, res) => {
  res.send('Testing tentang ');
});


app.listen(8000, () => {
  console.log('Server is running at port 8000');
});