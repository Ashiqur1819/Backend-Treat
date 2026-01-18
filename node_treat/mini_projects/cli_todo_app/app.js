import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n01. Add a Task");
  console.log("02. View Tasks");
  console.log("03. Exit");
  console.log(" ");
  rl.question("Choose an option: ", handleInput);
};

const handleInput = (option) => {
  if (option === "1") {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log("Task added: ", task);
      showMenu();
    });
  } else if (option === "2") {
    console.log("\nYour todo lists:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option === "3") {
    console.log("Good byeee!");
    rl.close();
  } else {
    console.log("Invalid Option! Please try again.");
    showMenu();
  }
};

showMenu();
