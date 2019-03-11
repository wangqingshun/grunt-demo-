
/*function add(x,y){

    return Number(x)+Number(y);
}

const x=process.argv[2]||1,
      y=process.argv[3]||1;
console.log(`${x}+${y}=${add(x,y)}`)*/


const add = require('./calc.js');

const x=Number(process.argv[2])||1,
      y=Number(process.argv[3])||1;
console.log(`${x}+${y}=${add(x,y)}`)
