

//Problem -2
function ReverseString(intStr) {
  let reversedString = ""; 
  let i = intStr.length - 1; 

  if (typeof intStr !== 'string' || intStr.length === 0) {
    return 'Invalaid Input'
  }
  while (i >= 0) {
    
    reversedString = reversedString + intStr[i]; 
    
    i--; 
  }
  
  return reversedString;
}

let result = ReverseString("jello");
console.log(result); 


//Problem -3
function SumOfMult(n) {
  let sum = 0;
  for (let i = 0; i<n; i++) {
    
    if (n % 3 == 0 || n % 5 == 0) {
      sum += n;
    } else {
      console.log("is empty")
    }
  }
  return sum;
  
}

console.log(SumOfMult(20))

// Problem -4
function PassingCount(score) {
  let count = 0;
  let failed = 0;
  for (let i = 0; i < score.length; i++) {
    if (score[i] >= 60) {
       count++;
    } else {
       failed++;
    }
  }
  return {count, failed};
}

let marks = [50,60,70,75,30]
let {count, failed} = PassingCount(marks)
console.log("Student are Passed:", count)
console.log("Student are Failed:", failed)

//Problem -5
function RandomNumberGame(guessNum) {
  let randomNum = Math.floor(Math.random()*10 + 1)
  
  if (guessNum === randomNum) {
    return "You guess number is correct"
  } else if(guessNum > randomNum) {
    return "You guess number is too high"
  } else {
    return "You guess number is too low"
  }
  
}

console.log(RandomNumberGame(5))