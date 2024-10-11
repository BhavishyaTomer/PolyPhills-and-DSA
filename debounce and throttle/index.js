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
throttle=()=>{
throttleCount++;
c.innerText=throttleCount
}
const debounceCount=_.debounce(debounceInitializer,300)
const throttleIncreaser=_.throttle(throttle, 300)
d.addEventListener('click',()=>{
    increaseCount()
   debounceCount()
   throttleIncreaser();
})