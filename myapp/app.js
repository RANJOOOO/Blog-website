// const express = require('express')
// const app = express()
// const port = 3000

// app.get('', (req, res) => {
//   res.send('Hello WorldoiouQEFUOBWVBWOQB!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })


// const express=require('express');
// const app=express();
// app.listen(3000);
// app.get('/',(req, res)=>{
  
//     res.send('C:\Users\Dell\Desktop\node-js-course\HTML_Pages');
// })









// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })







//New ishtart
const express=require('express');
const app=express();
const blogRoutes=require('./routers/blogRouters');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
const mongoose = require('mongoose');
const { result } = require('lodash');
const { render } = require('ejs');
const db='mongodb+srv://ali1:123@node-tuts.e1o8c6g.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db, {useNewUrlParser:true, useUnifiedTopology:true })
.then((result)=>app.listen(3000))
.catch((err)=>console.log(err));

app.use(blogRoutes);
app.get('/about', (req, res)=>
{
  // res.sendFile("./HTML_Pages/firstcode.html", {root: __dirname});
  res.render('about', {title: 'about'});
});


app.use((req,res)=>{
  res.status(404).render('404', {title: 'Not found'})
})
 






















