const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click',(e)=>{
text.classList.toggle('show-more');
if(readMoreBtn.innerText === 'Load Lyrics'){
   readMoreBtn.innerText = 'Hide Lyrics';
}else{
    readMoreBtn.innerText = 'Load Lyrics';
}
});


const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute('data-fromTop', (cursor.offsetTop -scrollY))
    // console.log(e)
});
window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + paraseInt(fromTop) + "px";
    console.log(scrollY)
});

window.addEventListener('click', () => {
   if(cursor.classList.contains('click')){
       cursor.classList.remove('click');
       void cursor.offsetWidth; // Triggering a Dom Reflow
       cursor.classList.add('click');
   } else {
    cursor.classList.add('click')
   }
});
