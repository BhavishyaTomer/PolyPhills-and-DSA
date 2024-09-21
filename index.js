const result=new Promise((res,rej)=>{
    const flag=true;
    if(flag)
    {
        res("resolved")
    }
    else{
        rej("is not resolved")
    }
})

result.then((res)=>{
    console.log("value is",res)
}).catch((rej)=>{
console.log("value is",rej)
})


const myFunction=(callback)=>{
    const flag=true;
    if(flag)
    {
        callback("resolved")
    }
    else{
        callback("is not resolved")
    }
}
myFunction((err,res)=>{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(res)
    }
})
async function handleResult() {
    try {
        const res = await result;
        console.log("value is async", res);
    } catch (rej) {
        console.log("value is", rej);
    }
}

handleResult();