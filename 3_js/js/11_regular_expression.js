var mark = "<mark>$&</mark>";
function test1(){
    /* 
        정규표현식
         - 특정 규칙을 가진 문자열 집합에 대한 형식언어
         - 유효성검사, 검색, 문자열치환작업등에서 효율적인 처리가 가능
         - 간결한 코드를 만드는 표현식 숙지가 쉽지 않으며, 언어독립적
           으로 동작한다.
    */
    // 정규식 객체생성
    var re1 = /a/;
    var re2 = new RegExp(/[0-9]/);
    var re3 = new RegExp("[a-z]");
    var re4 = new RegExp("[A-z]");

    // 정규표현식의 메서드
    // test() : boolean
    console.log(re1.test('abcde')); // true 포함여부
    console.log(re1.test('bcdef')); // false

    console.log(re2.test('honggd123'));
    console.log(re2.test('honggd!!'));

    console.log(re3.test('HONGGD123'));

    // 문자열의 정규식 활용 메서드
    // match
    console.log('cba'.match(re1));

    // search : 일치하는 인덱스
    console.log('skswaiqkxlzma'.search(re1)) // 없으면 -1

    var str = 'askswaiqakxlzma';
    var r = /a/g;
    console.log("1회",r.exec(str).index);
    console.log("2회",r.exec(str).index);
    console.log("3회",r.exec(str).index);

    // replace
    console.log('cadqbakda'.replace(re1, 'A'));
    console.log('cadqbakda'.replace(/a/g, 'A')); // replaceAll에는 정규식 불가
}

/* 
    flag문자
     - g(global) : 정규식에 대한 전역비교를 수행하는 기호
     - i(ignore) : 영문자중 대소문자를 구분하지 않고 비교를 수행
     - m(multi-line) : 개행문자를 기준으로 여러줄이 있는 경우, 줄단위 비교
*/
function test2(){
    var str = "Javascript jQuery Ajax";

    // $& = 매칭된 text를 가리키는 키워드 -> <mark>a</mark>
    area.innerHTML = 
    str.replace(/a/gi, "<mark>$&</mark>");
}

/* 
    anchor문자
     - ^ : 문자열 시작
     - $ : 문자열 끝
*/
function test3(){
    var str = "Javascript\nxxx\njQuery\nAjax";
    area.innerHTML = str.replace(/^j/igm, mark);
    area.innerHTML = str.replace(/x$/igm, mark);
}

function test4(){
    /*
     * 사용자로부터 문자열을 입력받고(prompt),
     * k로 시작하면서, h로 끝나는 경우에는 잘하셨습니다.
     * 아닌 경우, 적합한 문자가 아닙니다. 경고창을 띄우세요.
     * 
     * ex) kh -> o, k2h -> o, kxxxxxxh -> o
     * ah -> x, kdddd -> x
    */
    var str = prompt("문자열을 입력하세요.");
    (str.match(/^k/img) && str.match(/h$/img)) ? alert("잘하셨습니다.") : alert("적합한 문자가 아닙니다.")

    var re1 = /^k/img;
    var re2 = /h$/img;
    if(re1.test(str) && re2.test(str)) alert("잘하셨습니다.");
    else alert("적합한 문자가 아닙니다.");
}

/* 
    DOT
    . 포인트 임의의 "한글자"
*/
function test5(){
    var re1 = /^...$/; // ^$ 빼면 최소 3글자 이상을 의미함
    console.log(re1.test('ab')); // false
    console.log(re1.test('abc')); // true
    console.log(re1.test('abcd')); // false

    var re2 = /a.b/g;
    area.innerHTML = "ab aab aaab".replace(re2, mark); // ab [aab] a[aab]

    var re3 = /in..$/;
    ["goingo","goin","gointo","going"]
    .forEach(function(s){
        console.log(s, re3.test(s));
    })

    var re4 = /^c...k$/;
    ["ck","cbk","cbak","cbawk","caaaak"]
    .forEach(function(s){
        console.log(re4.test(s));
    })
}

function test6(){
    /* 
        []
         - 한글자를 의미하며, 문자의 범위를 나타낸다
         - 대괄호안에 사용되는 ^는 특정문자는 제외하겠다는 의미를 가진다.
    */
    var s = "Javascript jquery Ajax 12345";

    area.innerHTML = 
        // a또는 j문자를 찾아서 mark로 변환
        // s.replace(/[aj]/g, mark);

        // a또는 j가 아닌 문자를 mark로 변환
        // s.replace(/[^aj]/g, mark);

        // 영어 대문자패턴을 모두 찾아서 mark로 변환
        // s.replace(/[A-Z]/g, mark);

        // 숫자를 모두 찾아서 mark로 변환
        // s.replace(/[0-9]/g, mark);

        // 영어대문자 + 숫자패턴
        s.replace(/[A-Z0-9]/g, mark);

    // 한글패턴
    var hangul = "안녕하세요. 저는 james입니다.ㅋㅋㅋㅋ"
    area.innerHTML = 
        hangul.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, mark);
}

function test7(){
    
}

function test8(){
    
}

function test9(){
    
}

function test10(){
    
}

function test11(){
    
}

function test12(){
    
}

function test13(){
    
}