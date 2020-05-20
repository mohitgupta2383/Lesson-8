// Create a function called divide that takes 2 numbers as parameters. The function should divide the first number by the second number and return the result. If the second number is a 0, the function should throw an Error object.

function divide(num1, num2) {
    if(num2 == 0) {
    throw new Error("Cannot divide by Zero");
}
return num1 / num2;

}

// Call the above function inside a try/catch block. You should log the exception message and then continue with the program.

try {
    console.log(divide(10, 0));
} catch (e) {
 
   console.log(e.message);
}