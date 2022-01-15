const ul = document.getElementById('ul')
const li = Array.from(document.getElementsByTagName('li'));
const search = document.getElementById('search');
const btn = document.getElementById('btn');
btn.addEventListener('click', e => {
  if(search.value != ""){
      var li = document.createElement('li');
      var h2 =  document.createElement('h2');
      var num = Math.floor(Math.random() * 100);
      var text = search.value;
      li.textContent = text;
      h2.textContent = num;
   if(h2.textContent >= 60){
       var h1 = document.createElement('h1');
       h1.textContent = "Good";
       li.append(h1);
   }
   if(h2.textContent < 60){
    var h3 = document.createElement('h3');
    h3.textContent = "below Average";
    li.append(h3);
   }
//    if(h2.textContent < 20){
// //     var h4 = document.createElement('h4');
// //     h4.textContent = "LOW";
// //     li.append(h4);
// //    }
      li.append(h2);
      ul.appendChild(li);
    search.value = "";
  }
});