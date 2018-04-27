let counter = document.getElementById('counter');
let minus = document.getElementById('-');
let plus = document.getElementById('+');
let heart = document.getElementById('<3');
let pause = document.getElementById('pause');
let likes = document.getElementsByClassName('likes')[0];
let isPaused = true;
let submit = document.getElementById('submit');
let form = document.getElementById('comment-form');
let commentList = document.getElementById('list');

let timer = setInterval(function(){
  if(isPaused){
    counter.innerText= parseInt(counter.innerText) + 1;
  }

}, 1000);

minus.addEventListener('click', function(){
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
})

plus.addEventListener('click', function(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
})

pause.addEventListener('click', function(){
  isPaused = !isPaused;
})

submit.addEventListener('click', function(e){
  e.preventDefault();
  let comment = document.querySelector('#comment-form > input')
  let commentPara = document.createElement("p");
  commentPara.innerHTML = comment.value;
  comment.value = "";
  commentList.append(commentPara);
})

heart.addEventListener('click',function(){

  let search = document.querySelectorAll(`li[data-num]`)
  let li;
  if (li = getLi()){
    let num = parseInt(li.innerText.split(" ")[4]) + 1
    li.innerHTML = `${li.getAttribute("data-num")} has been liked `+"<span>"
      + `${num}`+"</span>"+" times"
  } else {
  createLi()
}


  function createLi(){
    let ele = document.createElement("li");
    ele.setAttribute("data-num", counter.innerHTML);
    ele.innerHTML = counter.innerHTML +
      " has been liked "+"<span>1</span>"+" time"
    likes.appendChild(ele);
  }

  function getLi(){
    if (search && search.length > 0)
       return [...search].filter( li => li.getAttribute("data-num") == parseInt(counter.innerText))[0];

  }

})
