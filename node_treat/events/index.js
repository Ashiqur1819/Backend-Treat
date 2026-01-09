const EventEmitter = require("events");

const emitter = new EventEmitter()

// emitter.on("greet", (name) => {
//     console.log(`Hello world. My name is ${name}`)
// })


// emitter.emit("greet", "Ashiqur Rahman")


emitter.on("sumOfNumbers", (a, b) => {
    console.log(a + b)
})


emitter.emit("sumOfNumbers", 10, 5)