// let name="ali";
// console.log(name);


// file systeem creation

// const FileSystem=require('fs');


// if(!FileSystem.existsSync('./ali')){
// FileSystem.mkdir('./ali' , (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("succ created");
// })

// }
// else{
//     FileSystem.rmdir('./ali' , (err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("succ removed")
//     })
// }


//creating server


// const http = require('http');
// const fs=require('fs');
// const server= http.createServer((req,res)=>{
//     console.log(req.url, req.method);
//     res.setHeader('Content-Type', 'text/html');
//     res.write("Hello World!")
//     res.write('\n')
//     res.write("Practise hard like crazy ......")

// });
// server.listen(3000, 'localhost', ()=>{
//     console.log("listning for request on port number 3000");
// });

//creating server and then exporting file from another system and then showing it...

const http = require('http');
const fs=require('fs');
const server= http.createServer((req,res)=>{
    fs.readFile('./HTML_Pages/firstcode.html', (err,data)=>{
        if(err)
        {
            res.end(err);
        }
        else
        {
            res.end(data);
        }
    });


});
server.listen(3000, 'localhost', ()=>{
    console.log("listning for request on port number 3000");
});










