const {qs,qsa,drawtags,build,hasClass}=require('./common.js')
let lib = {}
function divClicked(e) {
  let divHtml = e.innerHTML;
  let editableText = build("input");
  editableText.setAttribute('type', 'text');
  editableText.value = divHtml;
  e.replaceWith(editableText);
  editableText.focus();
  // setup the blur event for this new textarea
  editableText.addEventListener('blur', () => {

    let html = editableText.value;
    let viewableText = build("li");
    viewableText.setAttribute('class', 'editable');

    viewableText.innerHTML = html;
    editableText.replaceWith(viewableText);
    lib.init_tree_event()
  })
}



lib.init_tree_event = () => {
  for (let o of qsa(".editable")) {

    o.addEventListener('click', (e) => {

      alert('hit')
      divClicked(e.target)
    })
    // $("div").click(divClicked);
  }
  for (let o of qsa(".file-tree li ")) {
    console.log(o)
    o.addEventListener('click', (e) => {
      let y
      console.log(e.target.tagName)
      if (e.target.tagName == 'LI') {
        y = e.target
      } else {
        console.log(e.target.parentElement)
        y = e.target.parentElement
        qs('#current_thumbnail').src = y.children[0].src
      }

      if (hasClass('closed', y)) {
        y.classList.remove('closed')
      } else {
        y.classList.add('closed')
      }
      console.log(y.classList)
    })

  }


}

lib.build_tree = (obj) => {

   return new Promise((resolve, reject) => {

   let tree = qs('.file-tree ')


    for (let o of obj) {


      let childs = "";

      for (let u of o.items) {

        childs += `<ul>
  <li class="closed" ><img src="">
  <ul>
  <li style="cursor:pointer;">` + u.url + `</li>
  <li class="editable">tags<ul>` + drawtags(u.tags) + `</ul></li>
  </ul>
  </li>



  </ul>`
        //child+="</ul>"
      }
      tree.insertAdjacentHTML('beforeend', "<ul><li class='closed'>" + o.name + childs + "</li><ul>")
      resolve()

    }

 })
}


module.exports = lib
