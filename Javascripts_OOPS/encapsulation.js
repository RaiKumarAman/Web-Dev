class Bank {
    #balance = 0;

    deposit(money) {
        if (money > 0) {
            this.#balance += money;
            return `Your amount has been deposited. Your Balance is ${this.#balance}`;
        } else {
            return "Invalid deposit amount. Money must be greater than 0.";
        }
    }

    withdraw(money){
        if(this.#balance>=money){
            this.#balance-=money
            return `Amount ${money} is debited. Your current balance is ${this.#balance}`;
        }
        else{
            return `Insufficient amount`;
        }
    }

    check(){
        return `Your current balance is ${this.#balance}`;

    }
}

const b1= new Bank();
console.log(b1.check());
console.log(b1.deposit(1000));
console.log(b1.check());
console.log(b1.withdraw(500));
console.log(b1.check());
console.log(b1.balance);


