function calculateAverage(sumOfValues, number){
    return sumOfValues / number;
}

function calculateMin(min, number){
    if(min > number){
        min = number;
    }
    return min;
}

function calculateMax(max, number){
    if(max < number){
        max = number;
    }
    return max;
}

function calculateMode($arrayOfNumbers, numberToCompare, maxAppearances, mostFrequentNumber){
    let appearances = 0;
    let number = mostFrequentNumber;
    for(let i = 0; i < $arrayOfNumbers.length; i++){
        if(numberToCompare === Number($arrayOfNumbers[i].textContent)){
            appearances++;
        }
    }
    if(appearances > 1 && appearances > maxAppearances){
        maxAppearances = appearances;
        number = numberToCompare;
        return {maxAppearances, number};
    }
    return {maxAppearances, number};
}

const $arrayOfNumbers = document.querySelectorAll('.random-numbers');

let sumOfValues = 0;
let min = 9999;
let max = -9999;
let maxAppearances = 0;
let mostFrequentNumber = 'none, there is no number that appears more than once';

for(let i = 0; i < $arrayOfNumbers.length; i++){
    const elementoI = Number($arrayOfNumbers[i].textContent);
    sumOfValues += elementoI;
    min = calculateMin(min, elementoI);
    max = calculateMax(max, elementoI);
    ({maxAppearances: maxAppearances, number: mostFrequentNumber} = calculateMode($arrayOfNumbers, elementoI, maxAppearances, mostFrequentNumber));
}

const average = calculateAverage(sumOfValues, $arrayOfNumbers.length);

const $averageNumber = document.querySelector('#average');
const $minNumber = document.querySelector('#min');
const $maxNumber = document.querySelector('#max');
const $modeNumber = document.querySelector('#mode');

$averageNumber.textContent += average;
$minNumber.textContent += min;
$maxNumber.textContent += max;
$modeNumber.textContent += mostFrequentNumber;
