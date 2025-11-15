class BankAccount {
  constructor(
    readonly userId: number,
    public userName: string,
    // private userBalance: number
    protected userBalance: number
  ) {}

  addBalance(balance: number) {
    this.userBalance += balance;
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance = 23;
  }
}

const FajlaAccount = new BankAccount(111, "Fajla", 20);
FajlaAccount.addBalance(231);
console.log(FajlaAccount);
