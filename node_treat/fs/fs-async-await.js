const fs = require("fs/promises")
const path = require("path")


const fileName = "test.txt"
const filePath = path.join(__dirname, fileName)

// const path1 = __dirname

// const readDirectory = async() => {
//     try{
//         const res = await fs.readdir(path1)
//         console.log(res)
//     }catch (error){
//         console.log(error)
//     }
// }

// readDirectory()


// const writeFile = async() => {
//     try {
//       await fs.writeFile(filePath, "This is the initial content.", "utf-8")
//       console.log("We successfully created the file")
//     } catch (error) {
//         console.log(error)
//     }
// }

// writeFile()


// const readFile = async() => {
//     try {
//         const res = await fs.readFile(filePath, "utf-8")
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// readFile()


// const updateFile = async() => {
//     try {
//         await fs.appendFile(filePath, "\nThis is the updated content.", "utf-8")
//         console.log("File updated successfull.")
//     } catch (error) {
//         console.log(error)
//     }
// }

// updateFile()


// const deleteFile = async() => {
//     try {
//         await fs.unlink(filePath)
//         console.log("We deleted the file.")
//     } catch (error) {
//         console.log(error)
//     }
// }

// deleteFile()


// const renameFile = async() => {
//     try {
//         await fs.rename(filePath, path.join(__dirname, "test2.txt"))
//         console.log("We renamed file successfully.")
//     } catch (error) {
//         console.log(error)
//     }
// }

// renameFile()