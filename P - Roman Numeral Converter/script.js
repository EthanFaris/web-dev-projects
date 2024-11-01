const userInput = document.getElementById("number"); 
const convertBtn = document.getElementById("convert-btn"); 
const outputText = document.getElementById("output");   
const outputContainer = document.getElementById("output-container"); 

function showOutput() { 
  outputContainer.style.border = "2px solid white"; 
  outputContainer.style.background = "#535364"; 
  outputText.color = "white"; 
  document.querySelector("#output-container").hidden = false;
} 

function showError() { 
  outputContainer.style.border = "3px solid #730202"; 
  outputContainer.style.padding = "5px"; 
  outputContainer.style.background = "#e7737d"; 
  outputText.style.color = "#730202";  
  document.querySelector("#output-container").hidden = false; 
} 

function convertToRomanNumeral(num) { 
  let result = ""; 
  if (num === 0) { 
    return result;
  } else if (num >= 1000) { 
    return "M" + convertToRomanNumeral(num - 1000);
  } else if (num >= 900) { 
    return "CM" + convertToRomanNumeral(num - 900);
  } else if (num >= 500) { 
    return "D" + convertToRomanNumeral(num - 500); 
  } else if (num >= 400) { 
    return "CD" + convertToRomanNumeral(num - 400); 
  } else if (num >= 100) { 
    return "C" + convertToRomanNumeral(num - 100); 
  } else if (num >= 90) { 
    return "XC" + convertToRomanNumeral(num - 90); 
  } else if (num >= 50) { 
    return "L" + convertToRomanNumeral(num - 50); 
  } else if (num >= 40) { 
    return "XL" + convertToRomanNumeral(num - 40);
  } else if (num >= 10) { 
    return "X" + convertToRomanNumeral(num - 10); 
  } else if (num >= 9) { 
    return "IX" + convertToRomanNumeral(num - 9);
  } else if (num >= 5) { 
    return "V" + convertToRomanNumeral(num - 5);
  } else if (num >= 4) { 
    return "IV" + convertToRomanNumeral(num - 4); 
  } else { 
    return "I" + convertToRomanNumeral(num - 1);
  }
}

 function checkUserInput(input) { 
  output.innerText = "";
  const number = Number(input);
  if (input === "" || !Number.isInteger(number)) { 
    outputText.innerText = "Please enter a valid number"; 
    showError(); 
    return;
  } else if (number <= 0) { 
    outputText.innerText = "Please enter a number greater than or equal to 1."; 
    showError(); 
    return; 
  } else if (number > 3999) { 
    outputText.innerText = "Please enter a number less than or equal to 3999."; 
    showError(); 
    return;
  }
  const result = convertToRomanNumeral(number); 
  outputText.innerText = result; 
  showOutput();
} 

function displayResult() { 
  checkUserInput(userInput.value);
}

convertBtn.addEventListener("click", displayResult); 
