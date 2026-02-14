function createBankAccount(initialBalance){
  let balance = initialBalance;

  return {
    deposit:function(amount){
      let balance = 0;
      balance+=amount;
      console.log("you deposited :",amount);
    },
    getBalance:function(){
      console.log("your current balance is :",balance);
    }
  }
}

const account = createBankAccount(100);

account.deposit(50);
account.getBalance();