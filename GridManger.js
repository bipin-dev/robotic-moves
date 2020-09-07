const Axis = require("./TransformAxis");
const DIRECTION = require("./TransformDirection");

class GridManger extends Axis {
  constructor(x, y) {
    super(x, y);
    this.maxX = x;
    this.maxY = y;
    this.grid = [];
    this.constructGrid();
  }

  start(inputVal, steps) {
    let positions = this.segregate(inputVal);
    positions = this.swapAndInvert(positions);
    let stepArr = steps.split("");
    this.walkSteps(positions, stepArr);
    return this.grid;
  }

  swapAndInvert(pos) {
    //swap
    let temp = parseInt(pos.x);
    pos.x = parseInt(pos.y);
    pos.y = temp;
    //invert
    pos.x = this.maxX - parseInt(pos.x) - 1;
    return pos;
  }

  constructGrid() {
    let grid = [];
    for (let x = 0; x < this.maxX; x++) {
      let row = [];
      for (let y = 0; y < this.maxY; y++) {
        row.push("E");
      }
      this.grid.push(row);
    }
  }

  segregate(values) {
    let [x, y, dir, color] = values.split(" ");
    return { x, y, dir, color };
  }

  walkSteps({ x, y, dir, color }, steps) {
    // current X, current Y, direction, color , step-FFRFIFIRFIF
    if (steps.length == 0) {
      return this.grid;
    }
    let step = steps.shift();
    [x, y] = super.transform(step, dir, x, y);
    dir = DIRECTION.tranform(step, dir);
    if (step == "I") {
      this.doPaint(x, y, color);
    }
    this.walkSteps({ x, y, dir, color }, steps);
  }

  doPaint(x, y, color) {
    if (this.grid[x] && this.grid[x][y]) {
      let existingColor = this.grid[x][y];
      if (existingColor != "E") {
        this.grid[x][y] = "Y";
      } else {
        this.grid[x][y] = color;
      }
    }
  }
}

module.exports = GridManger;
