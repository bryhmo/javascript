function createBankAccount(initialBalance){
  let balance = initialBalance
  return{

    deposit:function(amount){

      balance+=amount;

      console.log('You deposited :',amount);
    },

    withdraw:function(amount){

      if(amount>balance){

        console.log("insufficient funds");

      } else {

        balance-=amount;

        console.log("you withdraw :",amount);

      }
    },

    getBalance:function() {

      console.log("your current balance is :",balance);
      
    }
  }
}

const account1 = createBankAccount(100);


account1.deposit(56);
account1.getBalance();
account1.withdraw(21);
account1.getBalance();

