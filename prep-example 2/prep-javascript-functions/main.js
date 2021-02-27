function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  return number * 60;
}

console.log('convertHoursToMinutes Exercise', convertHoursToMinutes(2));

function personalizeGreeting(name) {
  return 'Hello' + ' ' + name;

}

console.log('personalizeGreeting Exercise:', personalizeGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log('subtractTwoNumbers Exercise:', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return radius * Math.PI * 2;
}
console.log('getCircleCircumference Exercise', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
console.log('getFullName Exercise:', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return (number * number * number);
}
console.log('cube Exercise:', cube(5));
