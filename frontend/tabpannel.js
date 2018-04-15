const {qs,qsa,drawtags,build,hasClass}=require('./common.js')
const settings = require('electron-settings');
module.exports=()=>{
  // Define variables
  const tabLabels = qsa("#tabs li");
  const tabPanes =qsa(".tab-contents");
  let tabstatus=  settings.get('currenttab');

  const cleantab=()=>{
    tabLabels.forEach(function(label, index){
      label.classList.remove("active");
    });
    tabPanes.forEach(function(pane, index){
      pane.classList.remove("active");
    });
  }


   if(tabstatus){
     cleantab()
     console.log(tabstatus)
     qs(tabstatus).classList.add("active");
     for(let o of qsa("#tabs li a")){
       if(o.getAttribute("href")===tabstatus){
         o.parentNode.classList.add("active");
       }
     }
//
// alert(tabstatus)
   }

  const activateTab=(e)=> {
    e.preventDefault();
  cleantab()


    // Activate current tab
    e.target.parentNode.classList.add("active");
    qs( e.target.getAttribute("href")).classList.add("active");
    settings.set('currenttab',e.target.getAttribute("href"))
  }

  // Apply event listeners

  tabLabels.forEach((label, index)=>{
    label.addEventListener("click", activateTab);
  });


return false;
}
