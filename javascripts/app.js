// Rover Object Goes Here
// ======================

let CommandString = "rffrfflfrff";

let rover = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog : [0 + ", " + 0]
}




// ======================
function turnLeft(rover){
  console.log("turnLeft called!");
  if(rover.direction === "N"){
    rover.direction = "W";
  }
  else if(rover.direction === "E"){
  rover.direction = "N";
  }
  else if(rover.direction === "S"){
    rover.direction = "E";
  }
  else if (rover.direction === "W"){
    rover.direction = "S"
  }
  else{console.log("error with direction")}
  console.log(rover.direction);
}


function turnRight(rover){
  console.log("turnRight was called!");
  if(rover.direction === "N"){
    rover.direction = "E";
  }
  else if(rover.direction === "E"){
  rover.direction = "S";
  }
  else if(rover.direction === "S"){
    rover.direction = "W";
  }
  else if (rover.direction === "W"){
    rover.direction = "N"
  }
  else{console.log("error with direction")}
  console.log(rover.direction);
  
}

function moveForward(rover){
  console.log("moveForward was called")
  if(rover.direction === "N" && rover.y > 0){
    rover.y --;
  }
  else if(rover.direction === "E" && rover.x < 10){
    rover.x ++;
  }
  else if(rover.direction ==="S" && rover.y < 10){
    rover.y ++;
  }
  else if(rover.direction ==="W" && rover.x > 0){
    rover.x --;
  }
  else{console.log("WARNING - rover tried to leave the grid")}
  console.log("The rover position is now " + rover.x +", "+ rover.y);
  rover.travelLog.push(rover.x +", "+ rover.y);
}


function command(CommandString){
for(let i = 0; i < CommandString.length; i++){
  if(CommandString[i] === 'f'){
    moveForward(rover);
  }
  else if(CommandString[i] === 'r'){
    turnRight(rover);
  }
  else if (CommandString[i] === 'l'){
    turnLeft(rover);
  }
  else{console.log("wrong command")}
}
console.log("The final rover position is now " + rover.x +", "+ rover.y);
console.log(rover.travelLog);
}