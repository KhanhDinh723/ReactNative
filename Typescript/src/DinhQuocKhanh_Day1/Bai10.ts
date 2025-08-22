// Create a class Account with public, private and read only fields. 

export class Account {
  public accountNumber: string;
  private balance: number;
  readonly accountType: string;

  constructor(accountNumber: string, initialBalance: number, accountType: string) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.accountType = accountType;
  }

// console.log(`Account created with number: ${this.accountNumber}, type: ${this.accountType}, initial balance: ${this.balance}`);



  // Method to deposit money
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}. New balance is ${this.balance}.`);
    } else {
      console.log("Insufficient funds or invalid withdrawal amount.");
    }
  }

  // Method to get the current balance
  getBalance(): number {
    return this.balance;
  }

}
const account = new Account("123456789", 1000, "Savings");
account.deposit(500); // Deposited 500. New balance is 1500.
account.withdraw(200); // Withdrew 200. New balance is 1300.




