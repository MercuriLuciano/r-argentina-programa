function addLabel(){
    const $label = document.createElement('label');
    $label.textContent = 'Enter the family member annual salary';
    $label.classList.add('salary-form-label');
    $salaryForm.appendChild($label);
}

function addInput(){
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = 'Annual salary';
    $input.classList.add('salary-form-input');
    $salaryForm.appendChild($input);
}

function calculateMaxAnnualSalary(inputValue, maxSalary){
    if(inputValue > maxSalary){
        maxSalary = inputValue;
    }
    return maxSalary;
}

function calculateMinAnnualSalary(inputValue, minSalary){
    if(inputValue < minSalary){
        minSalary = inputValue;
    }
    return minSalary;
}

function calculateAverageAnnualSalary(sumOfAnnualSalaries, amountOfSalaries){
    return sumOfAnnualSalaries / amountOfSalaries;
}

function calculateAverageMonthlySalary(sumOfAnnualSalaries, amountOfSalaries){
    const monthlySalaries = sumOfAnnualSalaries / 12;
    return monthlySalaries / amountOfSalaries;
}

function checkInputs($input){
    if($input.value < 0 || $input.value > 99999999){
        $input.style.borderColor = '#f00';
        invalidInput = true;
    }
    else{
        $input.style.borderColor = '';
    }
}
