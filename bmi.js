
function calculateBMI() {
  
 var mass = prompt("Enter your mass in kilograms:");
  var height =prompt("Enter your height in meters:");
 var bmi = mass / (height * height);
 console.log("Your BMI is: " + bmi.toFixed(2));
}
calculateBMI();
