var toDoList = new Array();
window.setTimeout(function() {
    do {
        var choice = prompt("What would you like to do?");
        if (choice === "new") {
            toDoList.push(prompt("Enter a new todo"));
        }
        else if (choice === "list") {
            console.log(toDoList);
        }
        else if (choice === "quit") {
            break;
        }
        else {
            console.log("Enter new, list or quit");
        }
    } while (choice !== "quit");
}, 500);
