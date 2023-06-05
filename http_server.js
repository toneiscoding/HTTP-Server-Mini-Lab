//Reference the HTTP example and make an HTTP server with the following routes:
/*- "/":   sends text "Welcome to my server"

-"/info": sends "This server will send you data about the creator of this server if you make a GET request to '/data'  "

-"/data": sends a string version of an object that describes you. (hint: use JSON.stringify) */


const http = require('http');

const hostname ='127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
   
    const path = req.url;

    if(path=== "/") {
        res.statusCode = 201;
        res.setHeader('Content-Type', 'text/plain');
        res.end("Welcome to my server")  
    } else if (path==="/info") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html')
        res.end("This server will send you data about the creator of this server if you mmake a GET request to '/data'")
    } else if (path==="/data") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/javascript')
        let person = [{name: "Tony", profession: "developer", awesomeness: 9000}]
        let stringPerson = JSON.stringify(person)
        res.end(stringPerson)
    } else {
        res.statusCode = 404;
        res.end("Bad Request")
    }
    console.log(path)

})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})