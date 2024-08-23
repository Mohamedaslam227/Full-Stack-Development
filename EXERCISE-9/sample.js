"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return User;
}());
// Example of getting user input
function getUserInput() {
    var r1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    var user1;
    r1.question("Enter your age:", function (name) {
        r1.question("Enter age:", function (age) {
            var user = new User(name, parseInt(age));
            user1 = user;
            r1.close();
        });
    });
    return user1;
}
// Calling the function to get user input
var emp;
emp = getUserInput();
emp.greet();
