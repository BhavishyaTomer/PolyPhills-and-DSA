Function.prototype.MyCustomApply=function(referenceObj={},myArg=[]){
    if(typeof(newFunction)!="function")
    {
        console.error("it is not a callable function");        
    }
   referenceObj.fn=this
   referenceObj.fn(...myArg)
}