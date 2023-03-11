const express = require('express');
const router = express.Router();
const Blog = require('../models/blogs');
const blogController= require('../controllers/blogController');

router.get('/add-blog', (req, res)=>{
  const blog = new Blog({
    title:'test blog',
    snippet:'about test blog',
    body:'more checking of test blog'
  });
  blog.save()
    .then((result)=>{
      res.send(result) 
    })
    .catch((err)=>{
      console.log(err);
    })
})
router.get('/', (req, res)=>
{
  // res.sendFile("./HTML_Pages/firstcode.html", {root: __dirname});
  // const blogs=[
  //   {title:"Welcome to world", snippet:'lorem ipsium sit amet consectetur' },
  //   {title:"Welcome to responsibilities", snippet: 'lorem ipsium sit amet consectetur'},
  //   {title:"Welcome to death", snippet:'lorem ipsium sit amet consectetur'},
  // ];
  // res.render('index', {title: 'Home', blogs});

  res.redirect('/blogs')
});
router.get('/blogs', blogController.blog_index)
router.post('/blogs', blogController.blog_create_post)
router.get('/blogs/create', blogController.blog_create_get);
router.get("/blogs/:id", blogController.blog_details)
router.delete("/blogs/:id", blogController.blog_delete)
module.exports=router;
