function getFirstSelector(selector) {
  var p = document.querySelector(selector);
  return p;
}

function nestedTarget() {
  var lis = document.getElementById('nested').querySelector('.target');
  return lis;
}

function increaseRankBy(n){
  var lis = document.getElementById('app').querySelectorAll('.ranked-list');
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (i + n).toString();
 }
}

function deepestChild(){
  var lis = document.getElementById('grand-node').querySelector('div');
  var nodeChild = lis.child;
  return lis;
}