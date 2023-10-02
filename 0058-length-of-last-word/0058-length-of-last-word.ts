function lengthOfLastWord(s: string): number {
    var arr : Array<string> = s.trim().split(" ");
    var res : string = arr[arr.length - 1];
    
    return res.length;
};