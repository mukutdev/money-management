// declareing balance
let balance;

//  getting element value
function getElementByIdValue(elementId){
    const getId = document.getElementById(elementId)
    const getValue = parseFloat(getId.value)
    if(isNaN(getValue)){
        return 0;
    }
      return getValue; 
}

// set innerText
function setInnerText(id, text){
    document.getElementById(id).innerText = text;
}

// Calculate total balance
function calculateTotalBalance() {
    const getIncomeData = getElementByIdValue('income') 
   const getFoodData = getElementByIdValue('food') 
   const getRentData = getElementByIdValue('rent') 
   const getClothesData = getElementByIdValue('clothes')

    const expenses = getFoodData + getRentData + getClothesData
    console.log(getFoodData, getIncomeData, getRentData, getClothesData);

           balance = getIncomeData - expenses
      if(getIncomeData >= expenses){ 
        setInnerText('expenses', expenses)
        setInnerText('balance', balance)
      }else{
        alert('your expenses is greater than your earning')
      }
      return balance;   
}

// calculate saveings amount and remaining balance
function calculateSavings() {
    const getSavingPercentage = getElementByIdValue('saveing-percent')
    if((balance  < 1) || (isNaN(balance))){
       alert('Please Earn Money First')
    }else{
    console.log(getSavingPercentage);
    const getSavingAmount = balance * getSavingPercentage / 100
    const remainingBalance = balance - getSavingAmount;

    // document.getElementById('saving-amount').innerText = getSavingAmount
    setInnerText('saving-amount', getSavingAmount)
    setInnerText('remaining-balance', remainingBalance)
   }
}

// event listeners
document.getElementById('calculate-btn').addEventListener('click', calculateTotalBalance)
document.getElementById('saving-btn').addEventListener('click', calculateSavings)