const $submit = document.querySelector('#submit');

$submit.onclick = function(){
  const userName = document.querySelector('#name').value;
  const userMiddleName = document.querySelector('#middle-name').value;
  const userLastName = document.querySelector('#last-name').value;
  const userAge = document.querySelector('#age').value;

  function chekConditions(userName, userMiddleName, userLastName, userAge){     //replace() is used to prevent the user from entering numbers in text fields
    const name = userName.replace(/[^0-9]+/g, '');
    const middleName = userMiddleName.replace(/[^0-9]+/g, '');
    const lastName = userLastName.replace(/[^0-9]+/g, '');
    return (name.trim() === '' && middleName.trim() === '' && lastName.trim() === '' && userAge !== '');
  }

  if(chekConditions(userName, userMiddleName, userLastName, userAge)){
    document.querySelector('h1').textContent = `Welcome, ${userName}!`;
    let userInfo = document.querySelector('#user-info');

    userInfo.textContent = `${userName} ${userMiddleName} ${userLastName}, ${userAge} years old`;

    userInfo.style.color = '#000';
    userInfo.style.borderColor = '#a5d4dc';
  }

  return false;
}
