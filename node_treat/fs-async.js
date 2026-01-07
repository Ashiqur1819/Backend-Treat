const fs = require("fs")
const path = require("path")

const fileName = "test.txt"
const pathName = path.join(__dirname, fileName)


// fs.writeFile(pathName, "This is initial content", "utf-8", (err) => {
//     if(err){
//         console.error(err)
//     }else{
//         console.log("File creation successful!")
//     }
// })


// fs.readFile(pathName, "utf-8", (err, data) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// fs.appendFile(pathName, "\nThis is updated content!", "utf-8", (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File update successful")
//     }
// })


// fs.unlink(pathName, (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File delete successful!")
//     }
// })


// fs.rename(pathName, path.join(__dirname, "test2.txt"), (err) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("File rename successful.")
//     }
// })