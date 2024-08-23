import { stdin, stdout } from "process";
import * as readline from "readline"
class Stack<T>
{
    private stack: T[];
    constructor()
    {
        this.stack=[];
    }
    Push(value:T):void{
        this.stack.push(value);
    }
    isEmpty():boolean{
        return this.stack.length===0;
    }
    Pop():T | undefined{
        if(this.isEmpty())
        {
            return undefined;
        }
        else
        {
            this.stack.pop();
        }

    }
    Print():void{
        console.log(`Stack: ${this.stack}`);
    }
}
async function Input(prompt: string): Promise<string>{
    const r1=readline.createInterface({
        input:stdin,
        output:stdout,
    });
    return new Promise((resolve)=>{r1.question(prompt,ans=>{resolve(ans)})});
}
async function main()
{
    let s =new Stack<number>();
    while (true) 
    {
        console.log("******STACK OPERATIONS******");
        console.log( "1.Push an element onto the stack.");
        console.log("2.Pop an element from stack.");
        console.log("3.Check for Empty Stack");
        console.log("4.Print Elements");
        console.log( "5.Exit");
        const n= await Input("Enter Your Choice: ");
        switch(n)
        {
            case'1':
                const val= await Input("Enter value: ");
                s.Push(Number(val));
                break;
            case '2':
                var x=s.Pop()
                if(x===undefined)
                {
                    console.log('The stack is empty');
                }
                else{
                    console.log(`${x} is value poped from stack`);
                }
                break;
            case '3':
                if(s.isEmpty())
                {
                    console.log("Empty Stack :(");
                }
                else
                {
                    console.log("Stack has some values ");
                }
                break;
            case '4':
                s.Print();
                break;
            case '5':
                return;
            default:
                console.log("Invalid option");



        }
    }
}
main();