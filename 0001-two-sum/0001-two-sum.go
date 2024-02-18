func twoSum(nums []int, target int) []int {
    res := []int{0,0}
    for i := 0; i < len(nums)-1; i++ {
        for j := i+1; j < len(nums); j++ {
            if(nums[i] + nums[j] == target) {
                res[0] = i
                res[1] = j
            }
        }
    }
    
    return res
}