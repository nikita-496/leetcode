let twoSum = function(nums, target) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++){
    if (hashMap [ nums[i] ] !== undefined) {
      return [ hashMap[nums[i]], i]
    }
    let diff = target - nums[i]
    hashMap[diff] = i
  }
}

nums = [8,3,2,6,1,10,12,7]
 target = 12
 console.log(twoSum(nums, target))