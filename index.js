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

console.log('problem 4 starts here...')

// #4
const untilNum = (num) => {
    for (let i = 1; i <= num; i++){
        console.log(i)
    }
   
}
console.log(untilNum(5));

console.log("problem 5 starts here")

//Problem 5

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(3,2));

console.log("problem 6 starts here")

//problem 6
const add = (num1,num2) => {
    if ( num1 === num2) {
        return 3 * (num1 + num2);
    } else {
        return num1 + num2
    }
    }
    console.log(add(2,4));
    console.log(add(10,5));
    console.log(add(3,7.5));
    console.log(add(5,5));
    console.log(add(6,6));

console.log("problem 7 starts here")

//problem 7

const isNegative = (num) => num < 0;

console.log(isNegative(3));
console.log(isNegative(-2));

console.log("problem 8 starts here")

//8
const triangleArea = (base,height) => 1/2 * base * height
        
console.log(triangleArea(5,7));
console.log(triangleArea(6,8));

console.log("Problem 9 starts here")

//Problem 9

const betweenTwentyAndFourty = (number) => number >= 20 && number <= 40;

console.log(betweenTwentyAndFourty(4));
console.log(betweenTwentyAndFourty(21));

console.log("Problem 10 starts here")

//Problem 10
const largest = (int1,int2,int3) => {
    if( int1 > int2 && int1 > int3){
        return int1
    } else if (int2 > int1 && int2 > int3){
        return int2
    } else {
        return int3
    }
}
console.log(largest(4,6,8));
console.log(largest(30,22,17));
console.log(largest(41,108,86));