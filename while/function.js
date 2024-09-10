let x,y;
x =6;
y =8;
  
function getRandomNumber(num1,num2){
  if(num1===num2)
  {
    return"the numbers are equal";
  }
  else if (num1>num2)
  {
    return "the first number is greater";

  }
  else(num1<num2)
  {
    return "the second number is greater";
  }
}
console.log(getRandomNumber(5, 10)); 
console.log(getRandomNumber(10, 5)); 
console.log(getRandomNumber(7,7));



function addNumbers(num1, num2) {
  return num1 + num2;
}
let result1 = addNumbers(5, 10);
console.log(result1);  

let result2 = addNumbers(7, 3);
console.log(result2); 



function isEven(number) {
  if (number % 2 === 0) {
      return true;
  } else {
      return false;
  }
}
console.log(isEven(4)); 
console.log(isEven(7));  
console.log(isEven(10));




function isAdult(age) {
  if (age >= 18) {
      return true;
  } else {
      return false;
  }
}
console.log(isAdult(20)); 
console.log(isAdult(17)); 
console.log(isAdult(18));  



function concatStrings(string1, string2) {
  return string1 + string2;
}

console.log(concatStrings('Good ', 'morning!')); 



function displayGreeting(name) {
  console.log(`Hello, ${name}!`);
}
displayGreeting('John');
displayGreeting('Alice');
displayGreeting('David');




function calculateSquare(number) {
  return number * number;
}
console.log(calculateSquare(2));  
console.log(calculateSquare(5));
console.log(calculateSquare(7));  




function getRandomNumber() {
  return Math.random();
}
let randomNumber = getRandomNumber();
console.log(randomNumber);


function greet(){
  console.log("hello,world!");
  }
  greet();


















