const fs = require("fs")
const path = require("path")

const fileName = "Test.txt"
const pathName = path.join(__dirname, fileName)


// const writeFile = fs.writeFileSync(pathName, "This is demo text", "utf-8")
// console.log(writeFile)

// const readFile = fs.readFileSync(pathName, "utf-8")
// // console.log(readFile.toString())
// console.log(readFile)

// const appendFile = fs.appendFileSync(pathName, "\nThis is new line content.", "utf-8")
// console.log(appendFile)

// const deleteFile = fs.unlinkSync(pathName)
// console.log(deleteFile)

// const renameFile = fs.renameSync(pathName, path.join(__dirname, "Demo.txt"))
// console.log(renameFile)