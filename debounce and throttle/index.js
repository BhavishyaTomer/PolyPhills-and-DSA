let a=document.querySelector('.normal');
let b=document.querySelector('.debounce');
let c=document.querySelector('.throttle');
let d=document.querySelector('.increaser')
var normalCount=0;
var debouceCount=0;
var throttleCount=0;
increaseCount=()=>{
    normalCount++
   a.innerText=normalCount
}
debounceInitializer=()=>{
    debouceCount++;
    b.innerText=debouceCount
}
throttle=(arg)=>{
console.log(arg)
throttleCount++;
c.innerText=throttleCount
}

let timer;

const debounceCount=(delay)=>{

    return function(){
        clearTimeout(timer);
     timer=setTimeout(()=>{
        debounceInitializer()
     },delay)
    }
}
let last = 0;
const throttlePolyfill = (cb, delay) => {
    
    return function (...args) {
        const now = Date.now();
        if (now - last >= delay) {
            last = now;
            cb.apply(this, args);
        }
    };
};

;


const throttleIncreaser=_.throttle(throttle, 300)
d.addEventListener('click',()=>{
    increaseCount()
   debounceCount(300)()
   throttlePolyfill(throttle,1000)("hello");

})