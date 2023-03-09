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

        function createInput(){
            const $input = document.createElement('input');
            $input.type = 'number';
            $input.placeholder = 'Age';
            $input.classList.add('family-member-age');
            $ageForm.appendChild($input);
        }
    
        function createLabel(familyMemberNumber){
            const $label = document.createElement('label');
            $label.textContent = `Family Member ${familyMemberNumber + 1}`;
            $label.classList.add('family-member-number');
            $ageForm.appendChild($label);
        }
    
        function addFamilyMember(familyMemberNumber){
            createLabel(familyMemberNumber);
            createInput();
        }
    
        function createButton(id, text){
            const $button = document.createElement('button');
            $button.id = id;
            $button.textContent = text;
            $ageForm.appendChild($button);
        }

        document.querySelector('#container').style.background = '#5b775e';
    
        for(let i = 0; i < amountOfPeople; i++){
            addFamilyMember(i);
        }
    
        if(!document.querySelector('#calculate-button')){

            createButton('calculate-button', 'Calculate');
            const $calculateButton = document.querySelector('#calculate-button');

            $calculateButton.onclick = function(){

                const $familyMemberAgeInputs = document.querySelectorAll('.family-member-age');
                let max = -9999;
                let min = 9999;
                let sumOfAges = 0;
                let invalidInput = false;

                function calculateMaxAge(max, ageToCompare){
                    if(ageToCompare > max){
                        max = ageToCompare;
                    }
                    return max;
                }

                function calculateMinAge(min, ageToCompare){
                    if(ageToCompare < min){
                        min = ageToCompare;
                    }
                    return min;
                }

                function calculateAverageAge(sumOfAges){
                    return sumOfAges / amountOfPeople;
                }

                function checkInputs($familyMemberAgeInputs){
                    if($familyMemberAgeInputs.value === '' || $familyMemberAgeInputs.value < 0 || $familyMemberAgeInputs.value > 120){
                        $familyMemberAgeInputs.style.borderColor = '#f00';
                        invalidInput = true;
                    }
                    else{
                        $familyMemberAgeInputs.style.borderColor = '';
                    }
                }


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
                    document.querySelector('#average-age').textContent = `The average age is ${calculateAverageAge(sumOfAges)} years`;
                }

                return false;
            }


            createButton('clear-button', 'Clear');
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
