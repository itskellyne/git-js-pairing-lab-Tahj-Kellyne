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