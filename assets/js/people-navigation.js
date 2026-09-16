(function () {
  var header = document.querySelector('.page-header');
  var masthead = document.querySelector('.masthead');
  if (!header || !masthead) return;
  var pending = false;
  function update() {
    pending = false;
    var edge = header.getBoundingClientRect().bottom;
    var height = masthead.offsetHeight;
    var past = document.documentElement.classList.contains('past-hero');
    if (!past && edge < height) document.documentElement.classList.add('past-hero');
    else if (past && edge > height + 24) document.documentElement.classList.remove('past-hero');
  }
  function request() { if (!pending) {pending=true;requestAnimationFrame(update);} }
  window.addEventListener('scroll',request,{passive:true});
  window.addEventListener('resize',request);
  update();
})();