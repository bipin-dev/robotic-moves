class Axis {
  constructor(x, y) {
    this.maxX = x;
    this.maxY = y;
  }

  isValidX(x) {
    if (x < this.maxX && x > -1) {
      return true;
    }
    return false;
  }

  isValidY(y) {
    if (y < this.maxY && y > -1) {
      return true;
    }
    return false;
  }

  transform(step, dir, x, y) {
    if (step == "F") {
      if (dir == "N") {
        if (this.isValidX(x - 1)) {
          x = x - 1;
        }
      }
      if (dir == "E") {
        if (this.isValidY(y + 1)) {
          y = y + 1;
        }
      }
      if (dir == "S") {
        if (this.isValidX(x + 1)) {
          x = x + 1;
        }
      }
      if (dir == "W") {
        if (this.isValidY(y - 1)) {
          y = y - 1;
        }
      }
    }
    return [x, y];
  }
}

module.exports = Axis;
