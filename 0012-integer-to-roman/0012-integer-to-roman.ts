function intToRoman(num: number): string {
    const symbolMap: [number, string][] = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    var roman = ""
    
    while(num > 0){
        for (let i = 0; i < symbolMap.length; i++){
            if(num >= symbolMap[i][0]){
                roman = roman + symbolMap[i][1];
                num = num - symbolMap[i][0];
                break;
            }
        }
    }
    
    return roman;
};