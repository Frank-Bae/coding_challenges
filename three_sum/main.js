// Given array nums = [-1, 0, 1, 2, -1, -4],

//   A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]


let nums = [-1, 0, 1, 2, -1, -4];
let target = 0


function threeSum(array, target){
  const arr = []
  for(let a = 0; a < array.length; a++) {
    let num1 = array[a]
    let num2 = array[a + 1]
    let num3 = array[a + 2]
    if (num1 + num2 + num3 === target){
      const newArr = [num1, num2, num3]
      arr.push(newArr)
    }
  }
  return arr
}

console.log(threeSum(nums, target))
