class Solution {
    public int maximumWealth(int[][] accounts) {
        int[] countWealth = new int[accounts.length];
        int highest = 0;
        
        for(int i = 0; i < accounts.length; i++){
            int sum = 0;
            
            for(int j = 0; j < accounts[i].length; j++){
                sum += accounts[i][j];
            }
            
            countWealth[i] += sum;
        }
        
        for(int i: countWealth){
            if (i > highest) {
                highest = i;
            }
        }
        
        return highest;
    }
}