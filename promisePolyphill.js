function myCustomPromise(executor){
 let resolveValue,rejectValue,isFulffiled=false,isCalled=false,value,isRejected=false;
 function resolve(val){
    isFulffiled=true;
    value=val;
    if(typeof(resolveValue)=="function")
    {
       resolveValue(val) 
       isCalled=true
    }
    
 }
 function reject(val){
    isRejected=true
    value=val;
    if(typeof(rejectValue)=="function")
    {
        rejectValue(val)
        isCalled=true
    }
    
 }
 this.then=function(callBack){
    resolveValue=callBack;
    if(isFulffiled && !isCalled)
    {
        isCalled=true
        resolveValue(value)
    }
    return this;
 }
 this.catch=function(callBack){
    rejectValue=callBack;
    if(isRejected&& !isCalled)
    {
        isCalled=true
        rejectValue(value)
    }
    return this;
 }
 try {
    executor(resolve,reject)
 } catch (error) {
    reject(error)
 }
}

const data=new myCustomPromise((resolve,reject)=>{
  setTimeout(() => {
    resolve(2);
  }, 1000);
})

data.then((res)=>{
 console.log(res)
}).catch((rej)=>{
 console.log(rej)
})







// const data=new Promise((resolve,reject)=>{
//     const boolean=true;
//     if(boolean)
//     {
//         resolve("suucefull")
//     }
//     else{
//         reject("not succesfull")
//     }
// })

// data.then((data)=>{
// console.log("then",data)
// }).catch((info)=>{
//     console.log("why",info)
// })