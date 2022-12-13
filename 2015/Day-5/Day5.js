var fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split("\n");

const Part1 = () => {

  const checkVowel = (s) => {
    var matches = s.match(/[aeiou]/g);
    return (matches?.length || 0) >= 3;
  }
  const checkDuplicate = (s) => {
    var matches = s.match(/(\w)\1+/g);
    return (matches?.length || 0) >= 1;
  }
  const checkBadString = (s) => {
    var matches = s.match(/ab|cd|pq|xy/g);
    return (matches?.length || 0) == 0;
  }

  let niceArray = [];

  for (var i = 0; i < input.length; i++){
    let s = input[i];
    if (checkVowel(s) && checkDuplicate(s) && checkBadString(s)){
      niceArray.push(input[i]);
    }
  }

  return niceArray.length;
}

const Part2 = () => {

  const checkOverLap = (s) => {
    var matches = s.match(/(\w{2}).*\1+/g);
    return (matches?.length || 0) > 0;
  }
  const checkRepeat = (s) => {
    var matches = s.match(/(\w).\1/g);
    return (matches?.length || 0) > 0;
  }

  let niceArray = [];

  for (var i = 0; i < input.length; i++){
    let s = input[i];
    if (checkOverLap(s) && checkRepeat(s)){
      niceArray.push(input[i]);
    }
  }

  return niceArray.length;
}

console.log ("Answer 1 : " + Part1());
console.log ("Answer 2 : " + Part2());

