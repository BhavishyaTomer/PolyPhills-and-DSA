Function.prototype.MyCustomBind=function(referenceObj={},...myArg){
    if(typeof(this)!="function")
    {
        console.error("it is not a callable function");        
    }
   referenceObj.fn=this
   return function(...newArg){
    return referenceObj.fn(...myArg,...newArg)
   }
}