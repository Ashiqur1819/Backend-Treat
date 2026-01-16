import readline from "readline"
import fs from "fs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const fileCreation = () => {
    rl.question("Enter your filename: ", (fileName) => {
        rl.question("Enter your file content: ", (fileContent) => {
            fs.writeFile(`${fileName}.txt`, fileContent, (err) => {
                if(err){
                    console.error(`Error occured: ${err.message}`)
                }else{
                    console.log(`Hurray! File creation successfull: ${fileName}.txt`)
                }
                rl.close()
            })
        })
    })
}

fileCreation()