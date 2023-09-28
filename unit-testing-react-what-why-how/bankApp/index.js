// bad attempts to make nested functions & logic for slide 22.


// function bankApp() {
//   let accountBalance = 1000; // Initial account balance

//   function checkAccountBalance(amountToWithdraw) {
//     if (amountToWithdraw <= accountBalance) {
//       return "Withdrawal successful.";
//     } else {
//       return "Insufficient funds. Withdrawal failed.";
//     }
//   }

//   // Simulate a withdrawal
//   const withdrawalAmount = 500;

//   const withdrawalResult = checkAccountBalance(withdrawalAmount);

//   console.log(withdrawalResult);
// }

// // Call the bankApp function to check the account balance and simulate a withdrawal
// bankApp();


function dimLights(outdoorBrightness) {
  // Check if outdoorBrightness is a valid number between 0 and 100
  if (typeof outdoorBrightness === 'number' && outdoorBrightness >= 0 && outdoorBrightness <= 100) {
    // Calculate the desired light brightness based on outdoorBrightness
    const desiredBrightness = 100 - outdoorBrightness; // Dim the lights in a balanced manner

    // Return the desired brightness level
    return desiredBrightness;
  } else {
    // Handle invalid outdoor brightness values
    throw new Error('Invalid outdoor brightness value.');
  }
}

// Example usage:
const outdoorBrightness = 80; // Replace with the actual outdoor brightness value
const desiredBrightness = dimLights(outdoorBrightness);
console.log(`Desired brightness: ${desiredBrightness}%`);
