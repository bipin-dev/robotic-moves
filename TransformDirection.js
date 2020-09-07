const tranform = (step, dir) => {
  // steps and direction
  let newDirection = dir;
  if (step == "R") {
    if (dir == "N") {
      newDirection = "E";
    }
    if (dir == "E") {
      newDirection = "S";
    }
    if (dir == "S") {
      newDirectionir = "W";
    }
    if (dir == "W") {
      newDirection = "N";
    }
  }
  if (step == "L") {
    if (dir == "N") {
      newDirection = "W";
    }
    if (dir == "E") {
      newDirection = "N";
    }
    if (dir == "S") {
      newDirection = "E";
    }
    if (dir == "W") {
      newDirection = "S";
    }
  }
  return newDirection;
};

module.exports = { tranform };
