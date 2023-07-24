class Solution {
    public int reverse(int x) {
        String intToString = String.valueOf(x);
        String concatString = "";
        StringBuilder builds = new StringBuilder(concatString);
        int result = 0;
        
        for(int i = intToString.length() - 1; i >=0; i--){
            if(intToString.charAt(intToString.length() - 1) == 0){
                continue;   
            }

            if(intToString.charAt(i) == '-'){
                StringBuilder build = new StringBuilder(concatString);
                builds = build.insert(0, intToString.charAt(i));
            }

            concatString = concatString.concat(String.valueOf(intToString.charAt(i)));
        }
        
        if(builds.toString() == ""){
            builds = builds.insert(0, concatString);
        }
        
        
        if(Long.parseLong(builds.toString()) < Math.pow(-2,31) || Long.parseLong(builds.toString()) > Math.pow(2,31)){
            return 0;
        }
        
        return Integer.parseInt(builds.toString());
    }
}