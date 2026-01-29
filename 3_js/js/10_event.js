function test1(){
    console.log('클릭 이벤트 발생');
}

// onclick 방식은 마지막 하나만 실행
document.querySelector("#btn2").onclick = function(){
    console.log("btn2 클릭!"); // 실행X
}
document.querySelector("#btn2").onclick = function(){
    console.log("btn2 클릭!2");
}

// EventListener는 전부 실행
// addEventListener가 표준
document.querySelector("#btn3").addEventListener("click", function(){
    console.log("btn3 클릭!!!");
});
document.querySelector("#btn3").addEventListener("click", function(){
    console.log("btn3 클릭!!!2");
});

/* 
    Event 객체
     - 발생한 모든 이벤트와 관련된 정보를 가지고 있는 객체
     - 이벤트가 발생한 요소나, 이벤트의 유형, 위치정보등을 보관
     - 이벤트 발생시 자바스크립트에서 이벤트 핸들러함수의 인자로
       event가 항상 전달된다.

    Event Target객체
     - 이벤트가 발생한 요소
*/
document.querySelector(".box").onmouseover = function(e){
    console.log(e);
    console.log(e.target);
    console.log(this);
    // 이벤트 핸들러함수 내부에서 this는 항상 event target을 가리킨다.
    this.innerHTML = "안녕";
}

document.querySelector(".box").onmouseout = function(e){
    this.innerHTML = "잘가";
}

/* 
    keydown - keypress - keyup
    키보드를 조작할 때 (누르기, 누르는 중, 때기)
*/
document.querySelector("#userInput").addEventListener('keyup', function(e){
    document.querySelector(".text-wrapper")
    .innerHTML = this.value;
})

// submit 제출기능은 input:button이 아닌 form의 역할
document.querySelector("form").onsubmit = function(e){
    // 사용자 입력삾에 대한 유효성 검사
    // 1. 아이디
    //   - 글자수가 4글자 이상인 경우만 허용
    if(userId.value.length < 4){
        alert("유효한 아이디를 입력하세요!!");
        userId.select();

        // 각 태그가 가지고 있는 기본이벤트 호출을 막는 방법
        // ex) form -> submit, a -> click
        // 1. return false
        // 2. e.preventDefault();

        // return false;
        e.preventDefault();
        // return 처럼 메서드를 종료시키지 않고 계속 진행
        // 기본이벤트 호출만 막음
    }
    
    // 2. 비밀번호
    //   - 비밀번호가 8글자 이상인 경우만 허용
    if(pwd.value.length < 8){
        alert("유효한 비밀번호를 입력하세요!");
        pwd.focus();

        // return false;
        e.preventDefault();
    }
}

function displayMsg(e, boxx){
    console.log(boxx.dataset.text);

    // 이벤트 버블링을 막기위한 메서드
    e.stopPropagation(); // 한번 실행 후 중지
}