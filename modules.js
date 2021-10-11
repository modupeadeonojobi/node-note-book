// const abc = require('./people');

// console.log('The whole object', abc);

// console.log('Singular', abc.people, abc.ages);


//USING DESTRUCTING
const { people, ages } = require('./people');

console.log(people, ages);

// USING BUILT IN MODULES

const os = require('os');

console.log(os.homedir(), os.platform());
