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

function addFamilyMember(familyMemberNumber, parent){
    createLabel(familyMemberNumber, parent);
    createInput(parent);
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

function checkInputs($familyMemberAgeInputs){
    if($familyMemberAgeInputs.value === '' || $familyMemberAgeInputs.value < 0 || $familyMemberAgeInputs.value > 120){
        $familyMemberAgeInputs.style.borderColor = '#f00';
        invalidInput = true;
    }
    else{
        $familyMemberAgeInputs.style.borderColor = '';
    }
}
