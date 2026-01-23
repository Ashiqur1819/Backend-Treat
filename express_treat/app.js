import express, { urlencoded } from "express";
import  {PORT}  from "./env.js";
const app = express();
import path from "path"


app.use(urlencoded({extended: true}))

app.get("/", (req, res) => {
  // console.log("Dirname: ", import.meta.dirname)
  // console.log("Filename: ", import.meta.filename)
  // console.log("URL: ", import.meta.url)

  // const _fileName = new URL(import.meta.url).pathname

  const homePagePath = path.join(import.meta.dirname, "public", "index.html")

  res.sendFile(homePagePath)
});


// app.get("/products", (req, res) => {
//   console.log(req.query)
//   res.send(`<h2>Phone name: ${req.query.name} <br/> Page: ${req.query.page} <br/> Limit: ${req.query.limit}</h2>`)
// })


app.get("/contact", (req, res) => {
  console.log(req.query)
  res.redirect("/")
  // res.send("OK")
})

app.post("/contact", (req, res) => {
  console.log(req.body)
  res.redirect("/")
  // res.send("OK")
})

app.use((req, res) => {
  // return res.status(404).send("<h2>Page not found!</h2>")
  return res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"))
})










app.listen(PORT, () => {
  console.log(`Server is running successfully on port: ${PORT}`);
});
