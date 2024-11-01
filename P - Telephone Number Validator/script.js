const input = document.getElementById("user-input"); 
const checkBtn = document.getElementById("check-btn"); 
const clearBtn = document.getElementById("clear-btn"); 
const results = document.getElementById("results-div"); 

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/

function checkInput() { 
  const phoneNumber = input.value;
  if (phoneNumber === "") { 
    alert("Please provide a phone number"); 
    return;
  } else if (regex.test(phoneNumber)) { 
    const newParagraph = document.createElement("p"); 
    newParagraph.textContent = "Valid US Number: " + phoneNumber; 
    newParagraph.style.color = "green"; 
    results.appendChild(newParagraph); 
    return;
  } else { 
    const newParagraph = document.createElement("p"); 
    newParagraph.textContent = "Invalid US Number: " + phoneNumber; 
    newParagraph.style.color = "brown"; 
    results.appendChild(newParagraph); 
    return;
  }
}

function clearInput() { 
  results.innerHTML = ""; 
  return;
}

checkBtn.addEventListener("click", checkInput); 
clearBtn.addEventListener("click", clearInput);