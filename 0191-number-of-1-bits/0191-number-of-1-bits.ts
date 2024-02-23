function hammingWeight(n: number): number {
    var count: number = 0;
    const toArray = n.toString(2).split('').map(Number);
    for(let val of toArray){
        if(val === 1){
            count+=1
        }
    }
    
    return count;
};