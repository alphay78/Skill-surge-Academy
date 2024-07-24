/*
(Hard) Task 6: If Statements and Control Structures
Create a function findNumber that takes an array of numbers and a target number. The function should:
Loop through the array.
If the target number is found, log the index and exit the loop using break.
If the current number is divisible by 3, skip the current iteration using continue.
Log "Target not found" if the loop completes without finding the target.*/

function findNumber(NumArray, TargetNumber) {
  for (let i = 0; i < NumArray.length; i++) {
      if (NumArray[i] === TargetNumber) {
          console.log("Index:", i);
          return; 
      }
      if (NumArray[i] % 3 === 0) {
          continue; 
      }
  }

  console.log("Target not found");
}

findNumber([1, 2, 4, 6, 8, 10], 8); 
findNumber([1, 2, 4, 6, 8, 10], 7); 

