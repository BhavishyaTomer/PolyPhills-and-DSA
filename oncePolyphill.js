function once(fn,context)
{
    let ran;
    return function(){
        if(fn)
        {
            ran=fn.apply(context||this,arguments);
            fn=null;
        }
        return ran;
    }
}

const hello=once((a,b)=>console.log("hello",a,b))

hello("bhavishya","tomer")

hello("bhavishya","tomer")
hello("bhavishya","tomer")
hello("bhavishya","tomer") 