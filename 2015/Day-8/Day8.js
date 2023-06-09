let fs = require('fs');

let data = 
  fs.readFileSync('input.txt', 'utf8')
    .split("\n")
    .filter(function(l){return l.length>0});