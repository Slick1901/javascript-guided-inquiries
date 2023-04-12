const name1 = 'Thomas';
const name2 = 'John';
const lenDiff = Math.abs(name1.length - name2.length);
const longerName = name1.length > name2.length ? name1 : name2;
console.log(`The name ${longerName} is longer than ${name1 !== longerName ? name1 : name2} by ${lenDiff} characters`);
