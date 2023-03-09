const $salaryForm = document.querySelector('#salary-form');

const $addInputButton = document.querySelector('#add-input-button');

$addInputButton.onclick = function(){

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
