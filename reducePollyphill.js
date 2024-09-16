Array.prototype.MyCustomReduce=function(cb,initialValue){
    let temp=initialValue
    for(let i=0;i<this.length;i++)
    {
        temp =cb(temp,this[i],i,this)
    }
    return temp;
}


// takes single value so we dont make arrya and dont use push 