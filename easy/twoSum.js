let twoSum = function(nums, target) {
  let result = []
  let size = nums.length
  
  for (i=0; i < size; i++) { //внешний цикл
      for (k=i+1; k <= size; k++) { //внутренний цикл 
        if (nums[i] + nums[k] === target)  {return result.concat([i],[k])} 
      }
  } 
};

const nums = [2,7,11,15]
const target = 26
console.log(twoSum(nums,target))