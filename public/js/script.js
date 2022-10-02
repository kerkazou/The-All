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