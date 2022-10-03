//AssidBar
const assidBar = document.getElementById('assidBar');
const btn_assidBar = document.getElementById('btn_assidBar');
const icone_menu = document.getElementById('icone_menu');
btn_assidBar.onclick = function () {
  if (icone_menu.classList.contains('bi-list')) {
    icone_menu.classList.remove('bi-list');
    icone_menu.classList.add('bi-x-lg');
    assidBar.style.removeProperty('display');
    assidBar.setAttribute("style", "display: block !important;");
    assidBar.classList.remove('d-none');
    assidBar.classList.add('d-block');
  } else {
    icone_menu.classList.remove('bi-x-lg');
    icone_menu.classList.add('bi-list');
    assidBar.style.removeProperty('display');
    assidBar.setAttribute("style", "display: none !important;");
  }
}


// Add Commontaire
function addCommontaire1(){
  const add_commontaire1 = document.getElementById('add_commontaire1');
  add_commontaire1.style.display = 'flex';
}
function addCommontaire2(){
  const add_commontaire2 = document.getElementById('add_commontaire2');
  add_commontaire2.style.display = 'flex';
}