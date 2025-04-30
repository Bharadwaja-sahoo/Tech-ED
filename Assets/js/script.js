window.onload = function () {
  AOS.init();
  document.getElementById('loader').style.display = 'none';
  document.body.classList.remove('loading');
  AOS.refresh();
};


document.addEventListener('contextmenu' , function(e){
    e.preventDefault();
})

document.onkeydown = function(e) {
    if(e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charAt(0))){
        return false;
    }
};


function isNumberKey(event) {
  const charCode = event.which || event.keyCode;
  // Allow only digits (48-57 in ASCII)
  if (charCode < 48 || charCode > 57) {
    return false;
  }
  return true;
}