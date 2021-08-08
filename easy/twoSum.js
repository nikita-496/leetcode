let twoSum = function(nums, target) {
  let result = []  

//Определение набора чисел, которые могут являться слагаемыми для target
let i = 0

while(i < nums.length) {
  let oneTerms = nums[i]
  let twoTerms = target - oneTerms
  if (nums.includes(twoTerms) && nums.lastIndexOf(twoTerms) !== i) {
    result.unshift(nums.indexOf(nums[i]), nums.lastIndexOf(target - nums[i]))
    break
  }
  i++
}
return result
};