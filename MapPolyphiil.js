Array.prototype.MyCustomMap(function(cb){
    let tempArray=[];
    for(let i=0;i<this.length;i++)
    {
        tempArray.push(cb(this[i], i, this)); // Arguments are (currentValue, index, array)
    }
    return tempArray;
})