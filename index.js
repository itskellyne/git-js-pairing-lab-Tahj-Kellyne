//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i=5;i < 100;i++){
        console.log(i);
    }
}
fiveToOneHundred();
console.log('problem 2 starts here...')

//Problem 2
const multiplesOfThree = () => {
    for (let i=3;i < 100;i++){
        if (i % 3 === 0){
            console.log(i);
        }
    }
}
multiplesOfThree();

console.log('problem 3 starts here...')
//Problem 3
const multiplesOfThreeOrFive = () => {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
      }
    }
  }
multiplesOfThreeOrFive();

