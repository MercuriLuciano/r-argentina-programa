const $submitButton = document.querySelector('#submit-button');

$submitButton.onclick = function(){
    const amountOfPeople = document.querySelector('#amount-of-people').value;
    const $ageForm = document.querySelector('#age-form');
    const $result = document.querySelectorAll('span');

    $ageForm.innerHTML = '';        // Deletes the content that was created with the submit and calculate buttons in case the user changes the number of relatives without using the clear button
    for(let i = 0; i < $result.length; i++){
        $result[i].textContent = '';
    }
    

    if(amountOfPeople !== '' && amountOfPeople > 0 && amountOfPeople < 25){

        document.querySelector('#container').style.background = '#5b775e';
    
        for(let i = 0; i < amountOfPeople; i++){
            addFamilyMember(i, $ageForm);
        }
    
        if(!document.querySelector('#calculate-button')){

            createButton('calculate-button', 'Calculate', $ageForm);
            const $calculateButton = document.querySelector('#calculate-button');

            $calculateButton.onclick = function(){

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
                    checkInputs($familyMemberAgeInputs[i]);
                }

                if(!invalidInput){

                    document.querySelector('#maximum-age').textContent = `The oldest family member is ${max} years old`;
                    document.querySelector('#minimum-age').textContent = `The youngest family member is ${min} years old`;
                    document.querySelector('#average-age').textContent = `The average age is ${calculateAverageAge(sumOfAges, amountOfPeople)} years`;
                }

                return false;
            }


            createButton('clear-button', 'Clear', $ageForm);
            const $clearButton = document.querySelector('#clear-button');

            $clearButton.onclick = function(){      // Clear button, delete the content that was created with the submit and calculate buttons

                $ageForm.innerHTML = '';
                for(let i = 0; i < $result.length; i++){
                    $result[i].textContent = '';
                }
                document.querySelector('#container').style.background = '';
                document.querySelector('#amount-of-people').value = '';

                return false;
            }

        }
    }
    else{
        document.querySelector('#amount-of-people').style.borderColor = '#f00';
    }

    return false;
}
