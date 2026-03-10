const http = require("http");
const server = http.createServer ((req, res)=>{
    res.write("Boliye JAI SHREE RAM");
    res.end();
});

server.listen(5000, () => {
    console.log("You are on server 5000")
});