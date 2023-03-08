const $submitButton = document.querySelector('#submit-amount-of-classes');


$submitButton.onclick = function(){

    const $amountOfClassesInput = document.querySelector('#amount-of-classes');
    const amountOfClasses = $amountOfClassesInput.value;
    const $classesForm = document.querySelector('#classes');
    const $cardsContainer = document.querySelector('#cards-container');
    const $result = document.querySelector('#result');
    
    $cardsContainer.innerHTML = '';
    $result.textContent = '';

    if(amountOfClasses !== '' && amountOfClasses > 0 && amountOfClasses < 100){

        $amountOfClassesInput.style.borderColor = '';
        
        function createInput(type, placeholder, className, parent){
            const $input = document.createElement('input');
            $input.type = type;
            $input.placeholder = placeholder;
            $input.classList.add(className);
            parent.appendChild($input); 
        }
    
    
        for(let i = 0; i < amountOfClasses; i++){       // Creates the necessary labels and inputs based on the number of classes entered by the user
            const $div = document.createElement('div');
            $div.classList.add('card');
            $cardsContainer.appendChild($div);

            const $formLabel = document.createElement('label');
            $formLabel.textContent = `Class ${i + 1}`;
            $div.appendChild($formLabel);
    
            createInput('number', 'Hours', 'hours-input', $div);
            createInput('number', 'Minutes', 'minutes-input', $div);
            createInput('number', 'Seconds', 'seconds-input', $div);
            
        }
    
        if(!document.querySelector('#calculate-button')){
            const $calculateButton = document.createElement('button');
            $calculateButton.textContent = 'CALCULATE';
            $calculateButton.id = 'calculate-button';
            $classesForm.appendChild($calculateButton);


            $calculateButton.onclick = function(){                  // Calculates the total duration of the classes

                $result.textContent = '';
    
                let sumOfHours = 0;
                let sumOfMinutes = 0;
                let sumOfSeconds = 0;
                const $hours = document.querySelectorAll('.hours-input');
                const $minutes = document.querySelectorAll('.minutes-input');
                const $seconds = document.querySelectorAll('.seconds-input');
                let invalidInput = false;
    
                function checkValidInput(element, maxTime){        // Verifies that the input is less than maxTime and greater than 0 and gives it a red border-color indicating 'error'
                    if(element.value > maxTime || element.value < 0){
                        element.style.borderColor = '#f00';
                        invalidInput = true;
                    }
                    else{
                        element.style.borderColor = '';
                    }
                }

                function checkInputs(hoursInput, minutesInput, secondsInput){       // Verifies if the 3 inputs are empty and gives them a red border color indicating 'error' if they are empty, otherwise calls checkValidInput() for each input
                    if(hoursInput.value === '' && minutesInput.value === '' && secondsInput.value === ''){
                        hoursInput.style.borderColor = '#f00';
                        minutesInput.style.borderColor = '#f00';
                        secondsInput.style.borderColor = '#f00';
                        invalidInput = true;
                    }
                    else{
                        checkValidInput(hoursInput, 40);
                        checkValidInput(minutesInput, 59);
                        checkValidInput(secondsInput, 59);
                    }
                }
    
                function updateTotalTime(currentTime, toTime){              // Converts 60 seconds/minutes in 1 minute/hour
                    if(currentTime >= 60){
                        toTime += Math.floor(currentTime / 60);
                        currentTime %= 60;
                    }
                    return {currentTime, toTime};
                }
    
            
                for(let j = 0; j < amountOfClasses; j++){
                    sumOfHours += Number($hours[j].value);
                    sumOfMinutes += Number($minutes[j].value);
                    sumOfSeconds += Number($seconds[j].value);
                    checkInputs($hours[j], $minutes[j], $seconds[j]);
                }
        
                if(!invalidInput){
                    ({currentTime: sumOfSeconds, toTime: sumOfMinutes} = updateTotalTime(sumOfSeconds, sumOfMinutes));
                    ({currentTime: sumOfMinutes, toTime: sumOfHours} = updateTotalTime(sumOfMinutes, sumOfHours));
                
                    $result.textContent = `${sumOfHours}:${sumOfMinutes}:${sumOfSeconds}`;
                }
            
                return false;
            }

        }
             
    }
    else{
        $amountOfClassesInput.style.borderColor = '#f00';
    }

    return false;
}
