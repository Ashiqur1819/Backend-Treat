const fs = require("fs/promises")
const path = require("path")

const fileName = "Demo.txt"
const filePath = path.join(__dirname, fileName)

// const filePath = __dirname


// fs.promises.readdir(filePath)
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })


// fs.writeFile(filePath, "This is the initial content.", "utf-8")
// .then(() => {
//     console.log("We successfully created the file")
// })
// .catch(err => {
//     console.log(err)
// })


// fs.readFile(filePath, "utf-8")
// .then(data => {
//     console.log(data)
// })
// .catch(err => {
//     console.log(err)
// })


// fs.appendFile(filePath, "\nThis is the updated content", "utf-8")
// .then(() => {
//     console.log("We successfully updated the file")
// })
// .catch(err => {
//     console.log(err)
// })


// fs.unlink(filePath)
// .then(() => {
//     console.log("We successfully deleted the file")
// })
// .catch(err => {
//     console.log(err)
// })

fs.rename(filePath, path.join(__dirname, "demo.txt"))
.then(() => {
    console.log("We successfully renamed the file.")
})
.catch(err => {
    console.log(err)
})




