// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


let nums = [-1, 0, 1, 2, -1, -4];
let target = 0

function threeSum (array, target) {
  for (let a = 0; a < array.length; a++){
    let num1 = array[a]
    for (let b = 0; b < array.length; b++){
      let num2 = array[b]
      for (let c = 0; c < array.length; c++){
        let num3 = array[c]
        if (num1 + num2 + num3 === target){
          return true
        }
      }
    }
  }
}

console.log(threeSum(nums, target))
