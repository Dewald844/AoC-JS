var fs = require('fs');

let inputData = fs.readFileSync('input.txt', 'utf8');

const part1 = () => {
  let level = 0;

  for (var i = 0; i < inputData.length; i ++){
    if (inputData[i] == '('){
      level ++;
    } else {
      level --;
    }
  }
};

const part2 = () => {

  let level_part2 = 0;

  for (var i = 0; i < inputData.length; i ++){
    if (inputData[i] == '('){
      level_part2 ++;
    } else {
      level_part2 --;
    }
    if (level_part2 == -1){
      return i + 1;
    }
  }
};

console.log("Answer 1 : " + part1 ());
console.log("Answer 2 : " + part2 ());