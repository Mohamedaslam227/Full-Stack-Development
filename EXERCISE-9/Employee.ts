import * as readline from "readline"
function Input(prompt:string) :Promise<string>
{
    const r1= readline.createInterface({
        input:process.stdin,
        output:process.stdout,
    });
    return new Promise(res=>
        {
            r1.question(prompt,answer=>{
                res(answer);
                r1.close();
            })

        });
}
class Employee{
    private name:string;
    private desig:string;
    private Basicpay:number;
    private Hra:number;
    private Da:number;
    constructor(name:string, desig:string, Basicpay:number, Hra:number, Da:number)
    {
        this.name = name;
        this.desig = desig;
        this.Basicpay = Basicpay;
        this.Hra = Hra;
        this.Da = Da;
    }
    calculatePay():void{
        const totalSal=this.Basicpay+(this.Basicpay*this.Hra)+(this.Basicpay*this.Da);
        console.log(`Name: ${this.name}`);
        console.log(`Designation:${this.desig}`);
        console.log(`Total Salary after adding HRA & DA:${totalSal}`);
    }

}
async function main()
{
    let name= await Input("Enter Name of the employee:");
    let desig= await Input("Enter Designation");
    let  Bp=Number( await Input("Enter basic pay"));
    let HRA=Number(await Input("Enter HRA in %:"));
    let DA=Number( await Input("Enter DA in %:"));
    const Emp:Employee=new Employee(name,desig,Bp,HRA,DA);
    Emp.calculatePay();
}
main();