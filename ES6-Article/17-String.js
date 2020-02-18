const course = 'RFB1';
console.log(course.startsWith('RF'));

const flightNumber = '20-AC2018-jz';
console.log(flightNumber.startsWith('AC', 3));
console.log(flightNumber.endsWith('jz'));

const accountNumber = '825242631RT0001';
console.log(accountNumber.endsWith('jz'));
console.log(accountNumber.endsWith('RT',11));
console.log(accountNumber.includes('RT'));


