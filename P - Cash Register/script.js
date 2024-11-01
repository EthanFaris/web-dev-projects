let price = 19.5;
let cid = [
  ['PENNY', 0.01],
  ['NICKEL', 0],
  ['DIME', 0],
  ['QUARTER', 0],
  ['ONE', 1],
  ['FIVE', 0],
  ['TEN', 0],
  ['TWENTY', 0],
  ['ONE HUNDRED', 0]
];

const changeDue = document.getElementById("change-due");
const purchaseBtn = document.getElementById("purchase-btn");
const amountPaid = document.getElementById("cash"); 
const changeTypes = document.querySelectorAll(".change-type");

  
function clear() { 
  changeDue.innerHTML = "";
} 

function pay(amount) { 
 let due = (amount - price).toFixed(2); 
 const totalCash = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2); 
 
 if (due === totalCash) { 
   const p = document.createElement("p");
   p.textContent = "Status: CLOSED";
   changeDue.appendChild(p);
 } else { 
   changeDue.textContent = "Status: OPEN";
 } 
 console.log(due);
 if (cid[8][1] !== 0 && due >= 100) { 
   let num = Math.floor(due / 100) * 100; 
   if (num > cid[8][1]) num = cid[8][1]; 
   cid[8][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[8].textContent = `Hundreds: ${cid[8][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `ONE HUNDRED: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[7][1] !== 0 && due >= 20) { 
   let num = Math.floor(due / 20) * 20;  
   if (num > cid[7][1]) num = cid[7][1]; 
   cid[7][1] -= num; 
   due = (due - num).toFixed(2);    
   changeTypes[7].textContent = `Twenties: ${cid[7][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `TWENTY: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 }
 console.log(due);
 if (cid[6][1] !== 0 && due >= 10) { 
   let num = Math.floor(due / 10) * 10; 
   if (num > cid[6][1]) num = cid[6][1]; 
   cid[6][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[6].textContent = `Tens: ${cid[6][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `TEN: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[5][1] !== 0 && due >= 5) { 
   let num = Math.floor(due / 5) * 5; 
   if (num > cid[5][1]) num = cid[5][1]; 
   cid[5][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[5].textContent = `Fives: ${cid[5][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `FIVE: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[4][1] !== 0 && due >= 1) { 
   let num = Math.floor(due / 1) * 1; 
   if (num > cid[4][1]) num = cid[4][1]; 
   cid[4][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[4].textContent = `Ones: ${cid[4][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `ONE: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[3][1] !== 0 && due >= 0.25) { 
   let num = Math.floor(due / 0.25) * 0.25; 
   if (num > cid[3][1]) num = cid[3][1]; 
   cid[3][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[3].textContent = `Quarters: ${cid[3][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `Quarter: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[2][1] !== 0 && due >= 0.1) { 
   let num = Math.floor(due / 0.1) * 0.1; 
   if (num > cid[2][1]) num = cid[2][1]; 
   cid[2][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[2].textContent = `Dimes: ${cid[2][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `DIME: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[1][1] !== 0 && due >= 0.05) { 
   let num = Math.floor(due / 0.05) * 0.05; 
   if (num > cid[1][1]) num = cid[1][1]; 
   cid[1][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[1].textContent = `Nickels: ${cid[1][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `NICKEL: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due);
 if (cid[0][1] !== 0 && due >= 0.01) { 
   let num = Math.floor(due / 0.01) * 0.01; 
   if (num > cid[0][1]) num = cid[0][1]; 
   cid[0][1] -= num; 
   due = (due - num).toFixed(2); 
   changeTypes[0].textContent = `Pennies: ${cid[0][1]}`; 
   const p = document.createElement("p"); 
   p.textContent = `PENNY: $${num}`; 
   changeDue.appendChild(p); 
   if (due === 0) return; 
 } 
 console.log(due)
 if (due > 0) changeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
 return;
}


function validate(amount) { 
  const due = amount - price; 
  const totalCash = cid.reduce((acc, curr) => acc + curr[1], 0);
  if (due === 0) { 
    changeDue.textContent = "No change due - customer paid with exact cash"; 
    return; 
  } else if (amount < price) { 
    alert("Customer does not have enough money to purchase the item"); 
    return;
  } else if (due > totalCash) { 
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
  } else { 
    pay(amount);
  }  
} 

function purchase() { 
  clear();
  validate(amountPaid.value);
} 

purchaseBtn.addEventListener("click", purchase);