const {qs,qsa,drawtags,build,hasClass}=require('./common.js')
module.exports=()=>{
  // Define variables
  const tabLabels = qsa("#tabs li");
  const tabPanes =qsa(".tab-contents");

  const activateTab=(e)=> {
    e.preventDefault();

    // Deactivate all tabs
    tabLabels.forEach(function(label, index){
      label.classList.remove("active");
    });
    [].forEach.call(tabPanes, function(pane, index){
      pane.classList.remove("active");
    });

    // Activate current tab
    e.target.parentNode.classList.add("active");
    var clickedTab = e.target.getAttribute("href");
    qs(clickedTab).classList.add("active");
  }

  // Apply event listeners
  tabLabels.forEach((label, index)=>{
    label.addEventListener("click", activateTab);
  });


return false;
}
