/* to run 
-----------------
| node index.js |
-----------------
*/

const gridManager = require("./GridManger");

// please put your inputs here.
let gridSize = "5 5";
let r1_pos = "0 0 N R";
let r1_moves = "FFRFIFIRFIF";
let r2_pos = "4 0 N G";
let r2_moves = "FLFFRFIRFILFLFI";

let sizes = gridSize.split(" ").map((size) => parseInt(size));
let manager = new gridManager(sizes[0], sizes[1]);

console.log("running for robot 1");
manager.start(r1_pos, r1_moves);

console.log("running for robot 2");
let finalGrid = manager.start(r2_pos, r2_moves);

// print final grid
console.log("Final Output :::");
for (let i of finalGrid) {
  console.log(i.join(""));
}
