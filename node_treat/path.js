const path = require("path")


// console.log(__dirname)
// console.log(__filename)

const filePath = path.join("New Folder", "Backend Development", "Practice", "Node.js")

// console.log(filePath)

const parseFile = path.parse(filePath)
const baseName = path.basename(filePath)
const dirName = path.dirname(filePath)
const extName = path.extname(filePath)
const resolveFile = path.resolve(filePath)



console.log({parseFile, baseName, dirName, extName, resolveFile})
