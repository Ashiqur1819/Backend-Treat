const http = require("http")

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("This is our Home page!")
        res.end()
    }

    if(req.url === "/about"){
        res.setHeader("Content-Type", "text/plain")
        res.write("This is our About page!")
        res.end()
    }

    if(req.url === "/contact"){
        res.setHeader("Content-Type", "text/html")
        res.write("<h1>This is our Contact page!</h1>")
        res.end()
    }
})


server.listen(5000, () => {
    console.log("Server is running on port:", 5000)
})