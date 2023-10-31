const body=document.querySelector('body');
body.addEventListener('mousemove',(event)=>{
    console.log('nsdsdfkdfk')
    const x=event.offsetX;
    const y=event.offsetY;
    const span=document.createElement('span');
    span.style.left=x+"px"
    span.style.height=y+'px'
    const size=Math.random()*100;
    span.style.width=size+'px';
    span.style.height=size+'px'

    body.appendChild(span);
    setTimeout(()=>{
        span.remove();
    }, 3000)


    

})