Function.prototype.MyCustomCall=function(referenceObj={},...arg){
    if(typeof(newFunction)!="function")
    {
        console.error("it is not a callable function");        
    }
   referenceObj.fn=this
   referenceObj.fn(...arg)
}