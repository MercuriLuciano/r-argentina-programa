document.querySelector('#submit-button').onclick = function(){
    const amountOfPeople = document.querySelector('#amount-of-people').value;
    const $ageForm = document.querySelector('#age-form');
    const $result = document.querySelectorAll('span');

    deletePreviousRelatives($ageForm, $result);

    if(amountOfPeople !== '' && amountOfPeople > 0 && amountOfPeople < 25){

        validInputStyles();
        addFamilyMembers($ageForm, amountOfPeople);
    
        if(!document.querySelector('#calculate-button')){
            
            createButton('calculate-button', 'Calculate', $ageForm);

            document.querySelector('#calculate-button').onclick = function(){

                const $familyMemberAgeInputs = document.querySelectorAll('.family-member-age');
                let max = -9999;
                let min = 9999;
                let sumOfAges = 0;
                let invalidInput = false;

                for(let i = 0; i < amountOfPeople; i++){
                    const inputIValue = Number($familyMemberAgeInputs[i].value);
                    sumOfAges += inputIValue;
                    max = calculateMaxAge(max, inputIValue);
                    min = calculateMinAge(min, inputIValue);
                    invalidInput = checkInputs($familyMemberAgeInputs[i], invalidInput);
                }

                if(!invalidInput){
                    displayResult(max, min, sumOfAges, amountOfPeople);
                }

                return false;
            }

            createButton('clear-button', 'Clear', $ageForm);

            document.querySelector('#clear-button').onclick =  function(){     // Clear button, delete the content that was created with the submit and calculate buttons
                reset($ageForm, $result);
                return false;
            }   
        }
    }
    else{
        invalidInputStyles();
    }

    return false;
}
