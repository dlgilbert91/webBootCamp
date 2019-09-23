var toDoList = new Array();
window.setTimeout(function() {
    do {
        var choice = prompt("What would you like to do?");
        if (choice === "new") {
            toDoList.push(prompt("Enter a new todo"));
        }
        else if (choice === "list") {
            listToDos();
        }
        else if (choice === "delete") {
            toDoList.splice(prompt("Enter index of todo to delete"), 1);
        }
        else if (choice === "quit") {
            break;
        }
        else {
            console.log("Enter new, list, delete or quit");
        }
    } while (choice !== "quit");
}, 500);

function listToDos() {
    console.log("**********");
    toDoList.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("**********");
}