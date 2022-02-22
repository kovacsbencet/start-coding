const firstAccount = {
    id: "468412",
    name: "Dan Bilzerian",
    balance: 10000,
    transactions: [
        {amount: 1000, "isSuccessful": true, type: "deposit", date: "2021.12.24."}, 
        {amount: 750, "isSuccessful": false, type: "withdraw", date: "2021.12.30." }]
}

const secondAccount = {
    id: "468543",
    name: "Ryan Reynolds",
    balance: 5000,
    transactions: [
        {amount: 2000, "isSuccessful": true, type: "deposit", date: "2021.12.31."}, 
        {amount: 1750, "isSuccessful": false, type: "withdraw", date: "2022.01.01."}]
    
}

const thirdAccount = {
    id: "468314",
    name: "Anne Hathaway",
    balance: 7500,
    transactions: [
        {amount: 2500, isSuccessful: true, type: "deposit", date: "2021.11.07."}, 
        {amount: 3500, isSuccessful: true, type: "deposit", date: "2021.11.0"6."}]
}

function getDateOfHighestDeposit(account){

    let amountOfHighest = 0;
    let dateOfHighest = null;

    for (const transaction of account.transactions) {
        let isRelevant = false;
        if(transaction.type === "deposit" && transaction.isSuccessful === true){
            isRelevant = true
        }

        if(isRelevant === true && transaction.amount > amountOfHighest){
            amountOfHighest = transaction.amount
            dateOfHighest = transaction.date
        }
    }

    return dateOfHighest

}
console.log(getDateOfHighestDeposit(thirdAccount) );
console.log(getDateOfHighestDeposit(firstAccount) );
console.log(getDateOfHighestDeposit(secondAccount) );