function calculateMonthlySalary(annualSalary){
    const monthsInAYear = 12;
    return annualSalary / monthsInAYear;
}

const $calculateButton = document.querySelector('#calculate');

$calculateButton.onclick = function(){
  const $inputUserAnnualSalary = document.querySelector('#annual-salary');
  const userAnnualSalaryValue = Number($inputUserAnnualSalary.value);

  $inputUserAnnualSalary.style.borderColor = '';

  if(userAnnualSalaryValue > 0){
    const monthlySalary = calculateMonthlySalary(userAnnualSalaryValue);
    document.querySelector('#monthly-salary').value = monthlySalary;
  }
  else{
    $inputUserAnnualSalary.style.borderColor = '#f00';
  }
  
  return false;
}
