var fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

const Part1 = () => {
  let position = {x : 0, y : 0};
  let deliveries = [];

  for (var i = 0; i < input.length; i ++){
    if ( input[i] == '^'){
      position.y ++;
      let newPos = [position.x,position.y];
      deliveries.push(newPos);
    }
    else if (input[i] == 'v'){
      position.y --;
      let newPos = [position.x,position.y];
      deliveries.push(newPos);
    }
    else if (input[i] == '<'){
      position.x --;
      let newPos = [position.x,position.y];
      deliveries.push(newPos);
    }
    else if (input[i] == '>'){
      position.x ++;
      let newPos = [position.x,position.y];
      deliveries.push(newPos);
    }
  }

  let stringArray = deliveries.map(JSON.stringify)
  let distinctDeliveries = [...new Set(stringArray)];

  return distinctDeliveries.length;

}

const Part2 = () => {

  let santaPosition = {x : 0, y : 0};
  let robotPosition = {x : 0, y : 0};
  let deliveries = [];

  for (var i = 0; i < input.length; i ++){
    if (i % 2 == 0) {
      if ( input[i] == '^'){
        santaPosition.y ++;
        let newPos = [santaPosition.x,santaPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == 'v'){
        santaPosition.y --;
        let newPos = [santaPosition.x,santaPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == '<'){
        santaPosition.x --;
        let newPos = [santaPosition.x,santaPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == '>'){
        santaPosition.x ++;
        let newPos = [santaPosition.x,santaPosition.y];
        deliveries.push(newPos);
      }
    } else {
      if ( input[i] == '^'){
        robotPosition.y ++;
        let newPos = [robotPosition.x,robotPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == 'v'){
        robotPosition.y --;
        let newPos = [robotPosition.x,robotPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == '<'){
        robotPosition.x --;
        let newPos = [robotPosition.x,robotPosition.y];
        deliveries.push(newPos);
      }
      else if (input[i] == '>'){
        robotPosition.x ++;
        let newPos = [robotPosition.x,robotPosition.y];
        deliveries.push(newPos);
      }
    }

  }

  let stringArray = deliveries.map(JSON.stringify)
  let distinctDeliveries = [...new Set(stringArray)];

  return distinctDeliveries.length;

}

console.log("Answer 1 : " + Part1 ());

console.log("Answer 2 : " + Part2 ());