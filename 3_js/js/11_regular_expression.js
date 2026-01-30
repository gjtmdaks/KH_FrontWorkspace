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
    /* 
        1. 사용자로 숫자로 시작되지 않는 id를 검사.(prompt)
        2. 숫자4자리인 비밀번호 여부 검사.(prompt)

        유효하지 않은 경우, alert창 띄우기.
    */
    var id = prompt("id 입력");
    if(/^[0-9]/.test(id)){
        alert("잘못작성");
        return;
    }
    var pwd = prompt("비번 입력");
    if(!/^[0-9]{4}$/.test(pwd)){
        alert("잘못작성");
        return;
    }
    /* 
    var id = prompt("아이디를 입력하시오(숫자로 시작할 것)");
    var pwd = prompt("비밀번호를 입력하시오(4자리 숫자)");

    var idck = /^[0-9]/img;
    var pwck = /^[0-9][0-9][0-9][0-9]$/img;

    if(!(idck.test(id) && pwck.test(pwd))){
        alert("유효하지 않음");
    }
    */
}

function test8(){
    /* 
        문자클래스

        \d : decimal 숫자 == [0-9]
        \w : word 영문자, 숫자, _ == [a-zA-z0-9]
        \s : space 공백문자, 탭, 개행문자 == [ \t\n]

        \D : 숫자가 이닌 문자 == [^0-9]
        \W : 영문자, 숫자, _가 아닌 문자 == [^a-zA-z0-9]
        \S : 공백, 탭, 개행문자가 아닌 문자 == [^ \t\n]
    */
    var s = "A1 B2 c3 d_4 e:5' ` ffGG6767--__--!\"@#$%^&*()     가\n나\n다\n";

    area.innerHTML = 
        // s.replace(/\d/g, mark);
        // s.replace(/\w/g, mark);
        // s.replace(/\s/g, mark);

        // s.replace(/[^0-9]/g, mark);
        // s.replace(/\D/g, mark);

        // s.replace(/[^ \t\n]/g, mark);

        s.replace(/[!\"@#$%^&*()]/g, mark);
}

/* 
    () 그룹핑
     | or선택자
*/
function test9(){
    var s = "월요일에는 월요병, 화요일은 화가 부글부글, "
          + "수요일은 술이 확 땡긴다. 목요일이 목이 컥 막히고, "
          + "금요일은 금방 올거 같지 않다.";

    area.innerHTML = 
        // s.replace(/(수요일|목요일|금요일)/g, mark);
        // s.replace(/(수|목|금)요일/g, mark);
        s.replace(/[수목금]요일/g, mark);
}

/* 
    escaping 문자
     - 메타문자를 실제문자값으로 사용하려면, \(역슬래시)를 통해 escaping
       처리 한다.
     - []안에서는 escaping이 필요 없다. (단, 시작 ^은 부정의 의미를 가짐.)
*/
function test10(){
    var s = "$12$ \\-\\ $25$";

    area.innerHTML = 
        // s.replace(/$/g, mark); // $를 그냥 사용하면 끝문자를 의미
        // s.replace(/\$/g, mark);
        // s.replace(/^\$/g, mark);
        s.replace(/\$$/g, mark);
}

/* 
    수량자( * + ? )

    a* : a가 0개이상인 패턴
    a+ : a가 1개이상인 패턴
    a? : a가 0 | 1개
*/
function test11(){
    var s = "aaabc abc bc";

    area.innerHTML = 
        // s.replace(/a*b/g, mark); // k.*h; -> kh ~ k aaaaabbbbb h
        // s.replace(/a+b/g, mark);
        // s.replace(/a?b/g, mark);

        s.replace(/a{0,}b/g, mark);
}

/* 
    수량표현
    a{5} : a가 5개
    a{2,5} : a가 2개이상 5개이하
    a{3,} : a가 3개 이상

    * -> {0,} 0개 이상
    + -> {1,} 1개 이상
    ? -> {0,1} 0 | 1
*/
function test12(){
    var s = "aa aba abba abbba";

    area.innerHTML = 
        // s.replace(/ab{3}a/g, mark);
        // s.replace(/ab{1,2}a/g, mark);
        s.replace(/ab{2,}a/g, mark);
    
    //숫자로시작하고, 영문자3글자이상 나오고, .마침표로 끝나는 문자열을 검사하는 정규식 작성
    // true : 1abc안녕하세요. 3xyzkkk. 1ABC.
    // false : 100 1cbㅋㅋㅋ. 아아아아.
    // var re = /^[0-9][a-zA-Z]{3,}.{0,}[.]$/;
    var re = /^\d[A-z]{3,}.*\.$/;
    ["1abc안녕하세요.", "3xyzkkk.", "1ABC."].forEach(function(s){
        console.log(re.test(s)); // true
    });

    ["100", "1cbㅋㅋㅋ.", "아아아아.", "1가나다abc.", "123abc다나가."].forEach(function(s){
        console.log(re.test(s)); // false
    });
}

/* 
    Look Around
     - 탐색문법

    1. look ahead(전방탐색)
     - xxx(?=(re)) | xxx(?!(re))
     - xxx다음 re과 일치하는 패턴을 검색
     - 최종 반환되는 패턴은 xxx만 반환

    2. look behind(후방탐색)
     - (?<=(re))xxx : xxx앞에 re과 일치하는 요소가 있다면 xxx반환
     - (?<!(re))xxx : xxx앞에 re과 일치하지 않는 요소가 있다면 xxx반환
*/
function test13(){
    var s = "hello world hello tom hello Jane";
    area.innerHTML = 
        // s.replace(/hello(?=( world))/g, mark);
        // s.replace(/hello(?=( Jane))/g, mark);
        s.replace(/hello(?!( Jane))/g, mark);

    var s2 = "hello world lotte world t world";
    area.innerHTML = 
        // s2.replace(/(?<=(hello ))world/g, mark);
        s2.replace(/(?<!(hello ))world/g, mark);
}