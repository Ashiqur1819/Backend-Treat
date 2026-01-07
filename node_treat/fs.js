const fs = require("fs")
const path = require("path")

const fileName = "demo.txt"
const pathName = path.join(__dirname, fileName)


const writeFile = fs.writeFileSync(pathName, "This is demo text", "utf-8")
console.log(writeFile)