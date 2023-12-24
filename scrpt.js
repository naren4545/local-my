const counterr= function counterr(id,start,end,duration){
    let obj=document.getElementById(id);
    let current=start;
    const range=end-start;
    const incement=1;
    
    
   const timer=setInterval(()=>{
   current+=incement;
   obj.textContent=current;
   
   if(current===end){
       clearInterval(timer)
   }
   
   },duration)
}

const cun = document.querySelector('.counter-number-section');
const s1= cun.getBoundingClientRect();
console.log(s1.top);
console.log(cun)


const one=document.getElementById('3');
console.log(one)
const allSections = document.querySelector('.counter-number-section');
const revealSection = (entries, observer) => {
  // Again, only one treshold
  const [entry] = entries;
 console.log(entry);
 
  if (entry.isIntersecting) {
   
    counterr('3',0,45,70)
    counterr('2',0,25,100)
    counterr('1',0,600,10)
console.log('hii')
    observer.unobserve(entry.target);
  }
};
const rowObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.17,
});

rowObserver.observe(allSections);
  
