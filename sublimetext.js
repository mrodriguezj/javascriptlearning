let username2 = 'javier';
let defaultName2;

if (username2) {
  defaultName2 = username2;
} else {
  defaultName2 = 'Stranger';
}

console.log(defaultName2); // Prints: Stranger

let username = 'rodrigi';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger