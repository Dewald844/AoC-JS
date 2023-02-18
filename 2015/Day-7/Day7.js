let fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf8').split("\n").filter(function(l){return l.length>0});

gates = {};
gates.run = function(gate) {
    if (typeof gates[gate] === 'function') {
        gates[gate] = gates[gate]();
    }
    return gates[gate];
};
for (var i = 0, l = data.length; i < l; i++) {
    var task = data[i].split(' -> ');
    gates[task[1]] = new Function('return ' +
        task[0].replace(/(AND|OR|RSHIFT|LSHIFT|NOT)/, function(op) {
            return {
                AND: '&',
                OR: '|',
                RSHIFT: '>>',
                LSHIFT: '<<',
                NOT: '~'
            }[op] || "";
        }).replace(/([a-z]+)/g, "gates.run('$1')"));
}

let part1 = gates.a();

console.log("Part 1: " + part1);

//part 2: override wire b
gates.b = function () {
    return 46065;
}



console.log("Part 2: " + gates.a());
