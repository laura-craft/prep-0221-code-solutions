var person = { firstName: 'Steve', lastName: 'Martin', hobby: 'Banjo Playing' };
console.log(person);

var fullName = person.firstName + '' + person.lastName;
console.log('The persons name is:', fullName);

person.job = 'Jerk';
console.log('The persons current job is:', person.job);

person.previousJob = 'amigo';
console.log('The persons previous job is:', person.previousJob);

console.log(person);

var myCar = { make: 'Chrysler', model: 'Le Baron', year: '1986' };
console.log('Car Information', myCar);

myCar['owner'] = fullName;

// eslint-disable-next-line no-unused-expressions
fullName['owner'] + myCar['make'] + myCar['model'] + myCar['year'];
console.log('My name is' + ' ' + fullName + ' ' + 'and I drive a' + ' ' + myCar);

myCar['color'] = 'yellow';
console.log('My full car info:', myCar);
