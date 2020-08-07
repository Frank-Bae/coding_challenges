let nums = [2, 7, 11, 15]
let target = 18
function twoSum (array, target) {
  for(let i = 0; i < array.length; i++){
    const num1 = array[i]
    for(let k = 0; k < array.length; k++){
      const num2 = array[k]
      if(num1 + num2 === target){
        return `${num1} ${num2}`
      } else {
        return 'no match'
      }
    }
  }
}


console.log(twoSum(nums, target))
