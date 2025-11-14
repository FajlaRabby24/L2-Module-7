// * access >> modify
class BankAccount {
  public readonly userId: number;
  public userName: string;
  //   private userBalance: number; // * access only in this class
  protected userBalance: number; // * access only in this and it's children class

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance += balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
    console.log(`Hello this test`);
  }
}

const FajlaAccount = new BankAccount(111, "Fajla", 20);

FajlaAccount.addBalance(100);
FajlaAccount.addBalance(50);

console.log(FajlaAccount);
