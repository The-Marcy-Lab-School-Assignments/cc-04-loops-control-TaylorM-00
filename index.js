//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};
console.log(countFromOne(10));

// Question 2

const countEveryOdd = (n) => {
  for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};
countEveryOdd(10);

// Question 3

const isNegative = (num) => {
  if (num < 0) {
    console.log(true);
  } else {
    return false;
  }
};
isNegative(-8);
console.log(isNegative(-8));

// Question 4

const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};
console.log(betweenFiveAndTwenty(12));
