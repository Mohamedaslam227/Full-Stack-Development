import * as readline from 'readline'
class User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Example of getting user input
function getUserInput(): void {
    const r1=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    })
    var user1:User;
     r1.question("Enter your age:",(name:string)=>
    {
        r1.question("Enter age:",(age: string)=>{
            var user = new User(name, parseInt(age));
            user.greet();
            r1.close();
        });
    });
    
 
  
}

getUserInput();
