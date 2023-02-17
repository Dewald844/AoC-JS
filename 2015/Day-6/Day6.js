let fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8').split("\n");

// create 2D array
let createGrid = () => {

    let grid = Array.from(Array(1000), () => new Array(1000))

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = 0
        }}
    return grid;
} ;


let lightGrid1 = createGrid();
let count = 0;
let lightGrid2 = createGrid();
let brightness = 0;

const regex = /(\w+) (\d+),(\d+) through (\d+),(\d+)/;

const interpretInputPart1 = (input, lightGrid) => {
    let match = regex.exec(input);
    for (let i = 0; i < lightGrid.length; i++) {
        for (let j = 0; j < lightGrid[i].length; j++) {
            if ((i >= match [2] && j >= match [3]) && (i <= match [4] && j <= match [5])) {
                if (match[1] === "on") {
                    lightGrid[i][j] = 1;
                } else if (match[1] === "off") {
                    lightGrid[i][j] = 0;
                }else if (match[1] === "toggle") {
                    if (lightGrid[i][j] === 0) {
                        lightGrid[i][j] = 1;
                    } else {
                        lightGrid[i][j] = 0;
                    }
                }
            }
        }
    }
}

const interpretInputPart2 = (input, lightGrid) => {
    let match = regex.exec(input);
    for (let i = 0; i < lightGrid.length; i++) {
        for (let j = 0; j < lightGrid[i].length; j++) {
            if ((i >= match [2] && j >= match [3]) && (i <= match [4] && j <= match [5])) {
                if (match[1] === "on") {
                    lightGrid[i][j] += 1;
                } else if (match[1] === "off") {
                    if (lightGrid[i][j] > 0) {
                        lightGrid[i][j] -= 1;
                    }
                } else if (match[1] === "toggle") {
                    lightGrid[i][j] += 2;
                }
            }
        }
    }
}

for (let i = 0; i < input.length; i++) {
    interpretInputPart1(input[i], lightGrid1);
}

for (let i = 0; i < input.length; i++) {
    interpretInputPart2(input[i], lightGrid2);
}

for (let i = 0; i < lightGrid1.length; i++) {
    for (let j = 0; j < lightGrid1[i].length; j++) {
        if (lightGrid1[i][j] === 1) {
            count++;
        }
    }
}

for (let i = 0; i < lightGrid2.length; i++) {
    for (let j = 0; j < lightGrid2[i].length; j++) {
        brightness += lightGrid2[i][j];
    }
}

console.log("Number of lights switched on : " + count);
console.log("Total brightness : " + brightness);
