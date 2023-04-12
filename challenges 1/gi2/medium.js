const monthNames = ["January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

const input = prompt("Enter a number from 1 to 12:");
const monthIndex = parseInt(input) - 1;

if (monthIndex >= 0 && monthIndex < 12) {
  const monthName = monthNames[monthIndex];
  console.log(`${input} corresponds to ${monthName}.`);
} else {
  console.log("Invalid input. Please enter a number from 1 to 12.");
}
