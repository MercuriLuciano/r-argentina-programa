function deletePreviousRelatives($ageForm, $result){
    $ageForm.innerHTML = '';
    for(let i = 0; i < $result.length; i++){
        $result[i].textContent = '';
    }
}

function createInput(parent){
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.placeholder = 'Age';
    $input.classList.add('family-member-age');
    parent.appendChild($input);
}

function createLabel(familyMemberNumber, parent){
    const $label = document.createElement('label');
    $label.textContent = `Family Member ${familyMemberNumber + 1}`;
    $label.classList.add('family-member-number');
    parent.appendChild($label);
}

function addFamilyMembers(parent, amountOfPeople){
    for(let i = 0; i < amountOfPeople; i++){
        createLabel(i, parent);
        createInput(parent);
    }
}

function createButton(id, text, parent){
    const $button = document.createElement('button');
    $button.id = id;
    $button.textContent = text;
    parent.appendChild($button);
}

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

function calculateAverageAge(sumOfAges, amountOfPeople){
    return sumOfAges / amountOfPeople;
}

function checkInputs($familyMemberAgeInputs, invalidInput){
    if($familyMemberAgeInputs.value === '' || $familyMemberAgeInputs.value < 0 || $familyMemberAgeInputs.value > 120){
        $familyMemberAgeInputs.style.borderColor = '#f00';
        invalidInput = true;
    }
    else{
        $familyMemberAgeInputs.style.borderColor = '';
    }
    return invalidInput;
}

function displayResult(max, min, sumOfAges, amountOfPeople){
    document.querySelector('#maximum-age').textContent = `The oldest family member is ${max} years old`;
    document.querySelector('#minimum-age').textContent = `The youngest family member is ${min} years old`;
    document.querySelector('#average-age').textContent = `The average age is ${calculateAverageAge(sumOfAges, amountOfPeople)} years`;
}

function reset($ageForm, $result){
    deletePreviousRelatives($ageForm, $result);
    document.querySelector('#container').style.background = '';
    document.querySelector('#amount-of-people').value = '';
}

function validInputStyles(){
    document.querySelector('#container').style.background = '#5b775e';
    document.querySelector('#amount-of-people').style.borderColor = '';
}

function invalidInputStyles(){
    document.querySelector('#container').style.background = '';
    document.querySelector('#amount-of-people').style.borderColor = '#f00';
}
