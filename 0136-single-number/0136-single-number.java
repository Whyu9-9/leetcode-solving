class Solution {
    public int singleNumber(int[] nums) {
        int record = 0;
        for(int i = 0; i < nums.length; i++){
            record = record ^ nums[i];
        }
        
        return record;
    }
}