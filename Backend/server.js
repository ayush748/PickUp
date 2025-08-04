const http = require('http');
const app=require('./app');
const port = process.env.PORT || 3000;
// this is for creating an HTTP server using the Express app instance



const server = http.createServer(app);




server.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})