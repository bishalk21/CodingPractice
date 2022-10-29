# Multiple Pointers

Multiple Pointers is a pattern where you have multiple pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

Used when there is a linear **sorted** datastructure and the problem requires comparision between two members. Naive approach would give O(n<sup>2</sup>), while this method gives O(n)

This method involves using two pointers to traverse the array. One traverses from the left while the other traverses from the right.

## Example:

Write a function sumZero which accepts a sorted array of integers and return the number of pairs whose sum is zero.

### Naive Approach

1. Use a for loop to iterate over the array
2. For every number, iterate over the array again and find a partner number with sum zero

> Insight: The informatin that the array is sorted is not used

```javascript
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

### Multiple Pointers + General Approach

#### Understand the Problem

1. Restate
   > Write a function that takes a sorted array and returns the number of pairs such that the sum of the paired numbers is 0
2. Input
   > a sorted array of numbers
3. Output
   > Number of sumZero pairs
4. are input and output related
   > Yes
5. Labels for useful fata
   > Let's call the input array as simply array and the frequency of pair counter as pairCounter. Let the pointers be called left and righ

#### Explore Concrete Examples

1. Simple Case:
   > [-3, -2, -1, 0, 1, 2, 3] => 3<br>
   > the pointer should move towards each other until they cross each other
2. Boundary Case:
   > [-4, 4, 5,6 , 34, 50] => 1<br>
   > the pointer whose absolute value is higher should move
3. Empty case:
   > [] =>0
4. Invalid Case:
   > array assured

#### Break Down the Problem

```javascript
function sumZero(array) {
  // define pointers and counter
  //while pointers dont cross:
  // compare numbers
  // if pair found move both pointers, counter++
  // else move the pointer with higher value
}
```

#### Solve/Simplify

```javascript
function sumZero(array){
	// define pointers and counter
	let left = 0;
	let right = array.length - 1;
	let pairCounter = 0;
	//while pointers dont cross:
	while(left < right){
		// compare numbers
		if(array[left] + array[right] === 0){
		// if pair found move both pointers, counter++
		pairCounter++;
		left++;
		right--;
		}
		else{
		// else move the pointer with higher value
		if(Math.abs(array[left] > Math.abs(right))){
			// left is larger
			left++;
		}
		else{
			right--;
		}
	}
	return pairCounter;
}
```

#### Look Back and Refactor

1. Does it work?

```javascript
//Corrected code
function sumZero(array) {
  // define pointers and counter
  let left = 0;
  let right = array.length - 1;
  let pairCounter = 0;
  //while pointers dont cross:
  while (left < right) {
    // compare numbers
    if (array[left] + array[right] === 0) {
      // if pair found move both pointers, counter++
      pairCounter++;
      left++;
      right--;
    } else {
      // else move the pointer with higher value
      if (Math.abs(array[left]) > Math.abs(array[right])) {
        // left is larger
        left++;
      } else {
        right--;
      }
    }
  }
  return pairCounter;
}
```

2. Other ways to approach problem?
   > Naive way or two for loops
3. Other ways to approach smaller parts
   > Not sure
4. Is code Readable
   > Mostly
5. Refactor

```javascript
function sumZero(array) {
  let left = 0;
  let right = array.length - 1;
  let pairCounter = 0;
  //while pointers dont cross:
  while (left < right) {
    // compare numbers
    if (array[left] + array[right] === 0) {
      // if pair found move both pointers, counter++
      pairCounter++;
      left++;
      right--;
    } else {
      // move the pointer with higher value
      Math.abs(array[left]) > Math.abs(array[right]) ? left++ : right--;
    }
  }
  return pairCounter;
}
```

```javascript
function countUniqueValues(array) {
  let left = 0;
  let right = 1;
  let uniqueCounter = 0;
  //while pointers dont cross:
  while (right < array.length) {
    // compare numbers
    if (array[left] === array[right]) {
      // if pair found move both pointers, counter++
      right++;
    } else {
      // move the pointer with higher value
      left = right;
      right++;
      uniqueCounter++;
    }
  }
  return uniqueCounter;
}
```

```javascript
function countUniqueValues(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      array.splice(i, 1);
      i--;
    }
  }
}
```

```javascript
function countUniqueValues(array) {
  if (array.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}
```

```javascript
// write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
  let frequencyCounter = {};
  for (let i = 0; i < args.length; i++) {
    if (frequencyCounter[args[i]]) {
      return true;
    } else {
      frequencyCounter[args[i]] = 1;
    }
  }
  return false;
}
```

```javascript
// write a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// using Set

function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}
```

```javascript
// write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.
// Bonus Constraints: Time: O(N), Space: O(1)
function averagePair(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let average = (array[left] + array[right]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}
```

```javascript
function averagePair(array, target) {
  let lookup = {};
  for (let i = 0; i < array.length; i++) {
    let average = (array[i] + target) / 2;
    if (lookup[average]) {
      return true;
    } else {
      lookup[array[i]] = 1;
    }
  }
  return false;
}
```

```javascript
// write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
```
