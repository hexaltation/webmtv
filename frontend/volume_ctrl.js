module.exports=(el,gainNode)=>{



    const rect = el.getBoundingClientRect();
    const setval=(e)=>{
        if(drag){

   let x = e.clientX - rect.left; //x position within the element.

   let percent=(x/el.clientWidth)*100

   if(percent>=100){
     percent=100
   }else if(percent<=0){
     percent=0
   }

  el.firstElementChild.style.width=Math.floor(percent)+'%'
  gainNode.gain.value=Math.floor(percent)/100;
      }
    }
    let drag=false
    el.addEventListener('mousedown',(e)=>{
      drag=true;
      setval(e)
    })
  document.addEventListener('mouseup',(e)=>{
      drag=false;

    })

    document.addEventListener('mousemove',(e)=>{
    setval(e)
    })


}
