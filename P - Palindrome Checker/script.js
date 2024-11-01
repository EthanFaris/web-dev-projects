// Adding a comment to commit in git.
const userInput = document.getElementById("text-input"); 
const checkButton = document.getElementById("check-btn"); 
const resultString = document.getElementById("result");
let isNull = false;

function cleanInputString(str) { 
  if (str === "") { 
    isNull = true;
    alert("Please input a value"); 
    return;
  } else { 
    const regex = /[^\w]/g;  
    const regexTwo = /[_]/g; 
    return str.replace(regex, '').toLowerCase().replace(regexTwo, '');
  }
  
} 

function isPalindrome(str) { 
  const cleanString = cleanInputString(str); 
  if (isNull) { 
    return;
  }else { 
    if (cleanString.split('').reverse().join('') === cleanString) { 
    return `${str} is a palindrome.`   
    } else { 
    return `${str} is not a palindrome.`
    }
  } 
  
} 

function displayResult() { 
  const result = isPalindrome(userInput.value); 
  if (isNull) { 
    return;
  } else { 
    resultString.textContent = result; 
    return;
  }
  
} 

checkButton.addEventListener("click", displayResult);