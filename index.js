// Code your solutions in this file

function coinToss() {
  return Math.random() >= 0.5;
}

function tailsNeverFails(){
  let counter = 0;
  while(coinToss()){
    counter++
  }
  return `You got ${counter} tails in a row!`
}
