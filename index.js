const myButton = document.getElementById('topBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement > 100) {
    myButton.style.display = 'block';
  } 
  else {
    myButton.style.display = 'none';
  }
}

myButton.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})