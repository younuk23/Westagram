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
  let enter = e.keyCode? e.keyCode : e.which;
  if(enter === 13){
    appendComment();
  }
})

// article이 여러개일때? 어떻게 처리??, 배열로 인덱스넘버 이용해서 각 인덱스넘버다마다 할당? 
// 부모태그를 인덱스태그로 받고, 데이터를 받고 추가하는 대상을 인덱스넘버로 다시 변수설정??







