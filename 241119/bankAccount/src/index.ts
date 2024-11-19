// 1. 기본 동작
// 입금, 출금, 계좌간 송금, 잔액조회(잔액은 최소한의 금액이 필요합니다.)

// 2. 이자 확인
// 이자는 최대값에 제한이 있습니다. (예를 들어 이자가 1%이고, 최대값이 100만원일때, 120만원이 게좌에 있어도 여전히 100만원의 1%만 이자로 받습니다. 돈이 너무 많아서 이자가 무한대로 커지는 것을 막기 위함입니다.)

// 3. 즐겨찾기 계좌 관리하기
// 내가 즐겨찾는 계좌 리스트를 볼 수 있고, 계좌를 추가할 수 있으며, 게좌를 제거할 수 있습니다.

class BankAccount {
  // 잔액balance: 외부에서 접근하면 안 되니까 private
  private balance: number;
  // 이자율
  private interestRate: number; // 소수점 자리수 사용(0.1 === 10%)
  // 이자율 상한
  private interestCeiling: number;

  // 즐겨찾기 계좌
  private id: number;
  // 계좌 정보 저장
  private favoriteAccounts: BankAccount[] = [];

  constructor(
    id: number,
    balance: number,
    interestRate: number,
    interestCeiling: number
  ) {
    this.id = id;
    this.balance = balance;
    this.interestRate = interestRate;
    this.interestCeiling = interestCeiling;
  }

  // 입금: 반환값 없음void
  deposit(amount: number): void {
    this.balance += amount;
  }

  // 출금: 반환값 없음void
  withdraw(amount: number): void {
    // 만약 잔액이 출금하고자 하는 금액보다 적다?
    if (this.balance - amount < 0) {
      // 잔액 검증
      throw new Error("잔액이 부족합니다");
    }
    // 출금하기
    this.balance -= amount;
  }

  // 잔액 조회: 잔액은 숫자
  getBalance(): number {
    return this.balance;
  }

  // 월별 이자율 확인
  getMonthlyInterest(): number {
    // 잔액이 상한보다 크다면?
    if (this.balance > this.interestCeiling) {
      return this.interestCeiling * this.interestRate;
    }
    // 이자에 따른 값 반환
    return this.balance * this.interestRate;
  }

  // 송금, 매개변수로 계좌가 있어야 함(계좌의 타입은 BankAccount)
  transferMoney(amount: number, account: BankAccount): void {
    this.withdraw(amount);
    // 입금 받는 대상이 account니까 this.deposit이 아니라 account.deposit
    account.deposit(amount);
  }

  // =============================== 즐겨찾기
  // 즐겨찾기 계좌 추가
  addAccountToFavorites(account: BankAccount): void {
    this.favoriteAccounts.push(account);
  }
  // 즐겨찾기 목록 조회
  getFavoriteAccounts(): BankAccount[] {
    return this.favoriteAccounts;
  }
  // 즐겨찾기 계좌 해제
  removeFavoriteAccountById(id: number): void {
    // #1 ------------------------------------
    //     const originalLength = this.favoriteAccounts.length;
    //     // 전달한 ID와 값이 다른 계좌만 모아서 새로운 배열로 반환
    //     this.favoriteAccounts = this.favoriteAccounts.filter(
    //       (account) => id !== account.id
    //     );
    //     // 삭제할 계좌가 없다
    //     if (originalLength === this.favoriteAccounts.length) {
    //       throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다.");
    //     }
    // ------------------------------------------ #1

    // #2 ------------------------------------
    const indexToRemove = this.favoriteAccounts.findIndex(
      (account: BankAccount) => account.id === id
    );

    if (indexToRemove === -1) {
      throw new Error("즐겨찾기 계좌에서 해당 계좌를 찾을 수 없습니다.");
    }

    this.favoriteAccounts.splice(indexToRemove, 1);
  }
}

const account1 = new BankAccount(1, 10000, 0.01, 50000);
const account2 = new BankAccount(2, 30000, 0.01, 50000);

// =====코드확인=====

// account1.transferMoney(10000, account2);

// console.log(account2.getBalance());
// console.log(account1.getMonthlyInterest());
// console.log(account2.getMonthlyInterest());
// =================

// =====코드확인=====
// account1.deposit(9000);
// console.log(account1.getBalance());
// account1.withdraw(5000);
// console.log(account1.getBalance());
// console.log(account1.getBalance());
// try {
//   account1.withdraw(10000);
// } catch (err: unknown) {
//   console.log((err as Error).message);
// }
// =================

account1.addAccountToFavorites(account2);
account2.addAccountToFavorites(account1);

console.log(account1.getFavoriteAccounts());

account1.removeFavoriteAccountById(2);
console.log(account1.getFavoriteAccounts());
