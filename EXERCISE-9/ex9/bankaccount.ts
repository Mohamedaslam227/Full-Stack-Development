class BankAccount {
    private balance: number;
    private accountHolder: string;
  
    constructor(accountHolder: string, initialBalance: number = 0) {
      this.accountHolder = accountHolder;
      this.balance = initialBalance;
    }
  
    // Method to deposit funds
    credit(amount: number): void {
      this.balance += amount;
      console.log(`Credited ${amount} to ${this.accountHolder}'s account. New balance: ${this.balance}`);
    }
  
    // Method to withdraw funds
    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from ${this.accountHolder}'s account. New balance: ${this.balance}`);
      } else {
        console.log(`Insufficient funds to withdraw ${amount} from ${this.accountHolder}'s account.`);
      }
    }
  
    // Method to check balance
    checkBalance(): void {
      console.log(`Balance for ${this.accountHolder}'s account: ${this.balance}`);
    }
  }
  
  // Menu for operations
  const menu = `
  Bank Account Operations Menu:
  1. Credit 
  2. Withdraw 
  3. Check balance
  4. Exit
  `;
  
  // Function to create a bank account
  function createAccount(): BankAccount {
    const readlineSync = require('readline-sync');
    const accountHolder = readlineSync.question('Enter the name for account holder: ');
    const initialBalance = parseFloat(readlineSync.question('Enter initial balance: '));
    return new BankAccount(accountHolder, initialBalance);
  }
  
  // Function to handle user input
  function handleInput(account: BankAccount): void {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    console.log(menu);
  
    readline.question('Enter your choice: ', (choice: string) => {
      switch (choice) {
        case '1':
          readline.question('Enter amount to credit: ', (amount: string) => {
            account.credit(parseFloat(amount));
            readline.close();
            handleInput(account);
          });
          break;
        case '2':
          readline.question('Enter amount to withdraw: ', (amount: string) => {
            account.withdraw(parseFloat(amount));
            readline.close();
            handleInput(account);
          });
          break;
        case '3':
          account.checkBalance();
          readline.close();
          handleInput(account);
          break;
        case '4':
          console.log('Exiting...');
          readline.close();
          break;
        default:
          console.log('Invalid choice. Please enter a valid option.');
          readline.close();
          handleInput(account);
          break;
      }
    });
  }
  
  // Starting the application by creating a new account
  const account = createAccount();
  handleInput(account);
  