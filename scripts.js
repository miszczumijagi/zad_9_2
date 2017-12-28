var femaleNames = ['Maja', 'Martyna', 'Marta', 'Anna'];
var maleNames = ['Kamil', 'Radek', 'Tomasz', 'Hugo'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
};

console.log(allNames);