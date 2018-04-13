let lib={}
lib.hasClass=( cls,y)=> {
    return (' ' + y.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

lib.qs=(e)=>{
return document.querySelector(e)
}
lib.qsa=(e)=>{
return document.querySelectorAll(e)
}
lib.build=(e)=>{
return document.createElement(e)
}
lib.drawtags = (tags) => {
  let html = "";
  for (let t of tags) {
    html += "<li>" + t + "</li>"
  }
  return html;
}
module.exports=lib;
