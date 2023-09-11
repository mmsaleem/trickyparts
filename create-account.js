function createAccount(pin, amount = 0) {
    return {
        checkBalance(inputPin) {
            if(inputPin !== pin) return "Invalid PIN"
            return `${amount}`
        },
        deposit(inputPin, addMoney) {
            if(inputPin !== pin) return "Invalid PIN"
            amount += deposit;
            return `Succesfully deposited $${addMoney}. Current balance: $${amount}.`
        },
        withdraw(inputPin, takeMoney){
            if(inputPin !== pin) return "Invalid PIN"
            if(takeMoney > amount) 
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= takeMoney
            return `Succesfully withdrew $${takeMoney}. Current balance: $${amount}.`
        },
        changePin(oldPin, newPin) {
            if(oldPin !== pin) return "Invalid PIN"
            pin = newPin
            return "PIN successfully changed!"
        }

    }

}

module.exports = { createAccount };
