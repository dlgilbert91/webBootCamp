var age = prompt("What is your age?");

if (age < 0) {
    console.log("Age cannot be a negative number");
}
else if (age === 21) {
    console.log("Happy 21st Birthday");
}
else if (age % 2 === 1) {
    console.log("Your age is odd!");
}
else if (age % Math.sqrt(age) === 0) {
    console.log("Perfect Square");
}