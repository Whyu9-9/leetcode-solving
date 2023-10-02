class Solution {
    public int lengthOfLastWord(String s) {
        String[] arr = s.split(" ");
        String res = arr[arr.length - 1];
        
        return res.length();
    }
}