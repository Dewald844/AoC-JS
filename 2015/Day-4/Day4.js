const crypto = require('crypto');

// let hash = crypto.createHash('md5').update('some_string').digest("hex")

const Part1 = () => {
  for (var i = 0; i < 1000000; i ++){
    let test = "ckczppom" + i;
    let hash = crypto.createHash('md5').update(test).digest("hex");
    if (hash.substring(0,5) === "00000"){
      return i ;
    }
  }
}

const Part2 = () => {
  for (var i = 0; i < 10000000; i ++){
    let test = "ckczppom" + i;
    let hash = crypto.createHash('md5').update(test).digest("hex");
    if (hash.substring(0,6) === "000000"){
      return i ;
    }
  }
}

console.log ("Answer 1 : " + Part1());
console.log ("Answer 2 : " + Part2());