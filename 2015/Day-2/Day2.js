var fs = require('fs');

let inputData = fs.readFileSync('input.txt', 'utf8').split("\n")

let test = [
  "2x3x4",
  "1x1x10"
]

// 2*l*w + 2*w*h + 2*h*l

const part1 = () => {

  let totalArea = 0;

  for (var i = 0; i < inputData.length; i ++){
    let lwh = inputData[i].split("x");
    let sortedLwh = lwh.sort(function(a, b){return a - b});
    let slack = (+sortedLwh[0]) * (+sortedLwh[1]);
    let area = (2*(+lwh[0])*(+lwh[1])) + (2*(+lwh[1])*(+lwh[2])) + (2*(+lwh[2])*(+lwh[0])) + slack;

    totalArea = totalArea + area;
  }

  return totalArea;
}

const part2 = () => {
  let totalRibbon = 0;

  for (var i = 0; i < inputData.length; i++){
    let lwh = inputData[i].split("x");
    let sortedLwh = lwh.sort(function(a, b){return a - b});
    let wrap = (+sortedLwh[0] * 2) + (+sortedLwh[1] * 2);
    let bow = (+lwh[0]) * (+lwh[1]) * (+lwh[2]);

    totalRibbon = totalRibbon + (wrap + bow);
  }

  return totalRibbon;
}

console.log("Answer 1 : " + part1 ());
console.log("Answer 2 : " + part2 ());