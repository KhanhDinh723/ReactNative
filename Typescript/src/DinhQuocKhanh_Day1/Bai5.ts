// 5. Create a class BankAccount with balance.
//Add methods deposit() and withdraw().

export class BankAccount {
  constructor(private balance: number) {}
  // method deposit
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited:${amount}, New Balance:${this.balance}`);
    } else {
      console.log(`Deposit amount must be positive.`);
    }
  }

  //method withdraw
  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
    } else if (amount > this.balance) {
      console.log(`Insufficient funds for withdrawal.`);
    } else {
      console.log(`Withdrawal amount must be positive.`);
    }
  }
  // method display balance
  displayBalance(): void {
    console.log(`Current Balance: ${this.balance}`);
  }
}
// Example usage
const account = new BankAccount(1000);
account.displayBalance(); // Current Balance: 1000
account.deposit(500); // Deposited: 500, New Balance: 1500
account.displayBalance(); // Current Balance: 1500
account.withdraw(200); // Withdrawn: 200, New Balance: 1300
