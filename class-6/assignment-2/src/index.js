const $salaryForm = document.querySelector('#salary-form');

const $addInputButton = document.querySelector('#add-input-button');

$addInputButton.onclick = function(){

    addLabel();
    addInput();

    if(document.querySelector('#calculate-button')){
        $salaryForm.removeChild(document.querySelector('#calculate-button'));
    }

    const $calculateButton = document.createElement('button');
        $calculateButton.id = 'calculate-button';
        $calculateButton.textContent = 'Calculate';
        $salaryForm.appendChild($calculateButton);
    
        $calculateButton.onclick = function(){
    
            const $inputArray = document.querySelectorAll('.salary-form-input');
            let sumOfAnnualSalaries = 0;
            let maxSalary = -9999;
            let minSalary = 99999999;
            let invalidInput = false;
            let amountOfSalaries = $inputArray.length;
    
            for(let i = 0; i < $inputArray.length; i++){
                const inputValue = Number($inputArray[i].value);
                if($inputArray[i].value !== ''){        // $inputArray[i].value was used because inputValue changes '' for 0
                    sumOfAnnualSalaries += inputValue;
                    maxSalary = calculateMaxAnnualSalary(inputValue, maxSalary);
                    minSalary = calculateMinAnnualSalary(inputValue, minSalary);
                }
                else{
                    amountOfSalaries--;
                }
                checkInputs($inputArray[i]);
            }
    
            if(!invalidInput){
                document.querySelector('#max-salary').textContent = `The highest salary is ${maxSalary}`;
                document.querySelector('#min-salary').textContent = `The lowest salary is ${minSalary}`;
                document.querySelector('#average-annual-salary').textContent = `The average annual salary is ${calculateAverageAnnualSalary(sumOfAnnualSalaries, amountOfSalaries)}`;
                document.querySelector('#average-monthly-salary').textContent = `The average monthly salary is ${calculateAverageMonthlySalary(sumOfAnnualSalaries, amountOfSalaries)}`;    
            }
    
            return false;
        }

    return false;
}


const $deleteInputButton = document.querySelector('#delete-input-button');

$deleteInputButton.onclick = function(){

    const $labelArray = document.querySelectorAll('.salary-form-label');
    const $inputArray = document.querySelectorAll('.salary-form-input');
    const $calculateButton = document.querySelector('#calculate-button');

    const $lastLabel = $labelArray[$labelArray.length - 1];
    const $lastInput = $inputArray[$inputArray.length - 1];

    if(($labelArray.length) > 1){
        $salaryForm.removeChild($lastLabel);
        $salaryForm.removeChild($lastInput);
    }
    else{
        if(($labelArray.length) === 1){
            $salaryForm.removeChild($lastLabel);
            $salaryForm.removeChild($lastInput);
            $salaryForm.removeChild($calculateButton);
        }
    }

    const $spans = document.querySelectorAll('span');

    for(let i = 0; i < $spans.length; i++){
        $spans[i].textContent = '';
    }

    return false;
}
