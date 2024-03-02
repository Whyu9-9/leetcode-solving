function isIsomorphic(s: string, t: string): boolean {
    var map1 : string[] = [];
    var map2 : string[] = [];
    
    if(s.length !== t.length){
        return false;
    }

    for(let i : number = 0; i < s.length; i++){
        if(map1[s.charAt(i)] !== map2[t.charAt(i)]){
            return false;
        }
        
        map1[s.charAt(i)] = i + 1
        map2[t.charAt(i)] = i + 1
    }
    
    return true;
};