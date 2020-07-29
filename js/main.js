let commentBtn = document.getElementById('commentBtn'); //get commentbtn
let txt = document.getElementById('comment'); // get input 
function appendComment() {
  let commentbox = document.createElement('li'); //li tag make
  let commentListLeft = document.createElement('div');//div tag make
  let commentAuthor = document.createElement('a');//a tag make
  let comment = document.createElement('span');// span tag make
  let heart = document.createElement('img'); // img tag make
  let txt = document.getElementById('comment');
  let commentValue = document.getElementById('comment').value; // get textarea value 
  let commentList = document.getElementsByClassName('commentList')[0]; // get Ul tag
  comment.innerHTML = `&nbsp${commentValue}`; // insert comment into span
  heart.setAttribute('src','/img/heart.png');
  heart.setAttribute('alt','like-to-comment');
  commentAuthor.setAttribute('class', 'linkToPeople')
  commentAuthor.innerHTML = 'sotonghaeyo' // make author name, default , 나중에 로그인 한 사람으로 바꾸자
  commentListLeft.appendChild(commentAuthor); // a > div
  commentListLeft.appendChild(comment); // span > div
  commentbox.appendChild(commentListLeft); // div > li
  commentbox.appendChild(heart) // heart > li
  commentList.appendChild(commentbox); // li > ul
  txt.value = "";
}

commentBtn.addEventListener('click',appendComment)
txt.addEventListener('keydown', (e) => {
  if(e.keyCode === 13){
    appendComment();
  }
})









