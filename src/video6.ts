// getter
// setter

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number; // * access only in this class

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // * set use kre krte chi
  set addBalance(amount: number) {
    this.userBalance += amount;
  }

  // * get use kre krte chi
  get getBalance() {
    return this.userBalance;
  }
}

const FajlaAccount = new BankAccount(111, "Fajla", 20);

FajlaAccount.addBalance = 100;
FajlaAccount.addBalance = 50;

console.log(FajlaAccount.getBalance);
console.log(FajlaAccount);
