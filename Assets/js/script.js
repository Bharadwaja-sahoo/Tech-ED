window.onload = function () {
  AOS.init();
  document.getElementById('loader').style.display = 'none';
  document.body.classList.remove('loading');
  AOS.refresh();
};


function isNumberKey(event) {
  const charCode = event.which || event.keyCode;
  // Allow only digits (48-57 in ASCII)
  if (charCode < 48 || charCode > 57) {
    return false;
  }
  return true;
}