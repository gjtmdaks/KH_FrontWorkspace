// 매개변수(parameter) : 함수선언시 매개인자가 담길 공간
// 매개인자(argument) : 함수호출시 전달할 값
// 자바스크립트에서는 매개변수와 매개인자의 개수가 달라도
// 문제되지 않는다.
function test1(x) {
    console.log("x = ", x);

    // 모든 함수는 묵시적으로 arguments배열을 가지고 있다.
    console.log(arguments);
    for (var i of arguments) {
        console.log("x = ", i);
    }
}

function test2() {
    // 매개인자의 합을 출력하는 add메서드 작성
    add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55 출력
    add(12.34, 45.67); // 58.01 출력
    add('a', 'b', 'c', 'd'); // "abcd" 출력
}

function add(/*x*/) {
    // 숫자값을 저장하기위한 변수
    var sum = typeof (arguments[0]) == "number" ? 0 : "";
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    if (typeof (arguments[0]) == "number") {
        sum = Math.floor(sum * 100) / 100;
    }
    console.log(sum);

    /* var sum;
    if (typeof x === "number") sum = 0;
    if (typeof x === "string") sum = "";
    for(var i of arguments){
        sum += i;
    }
    console.log(sum); */
}

// 함수의 return구문이 없거나, return 뒤쪽에
// 반환할 값이 없는 경우 undefined를 반환
function test3() {
    var k = koo();
    console.log(k);
}

function koo() {
    return 100;
    // return;
}

// a^2 + b^2 = c^2;
function test4(a, b) {
    var c;

    var power = function (n) {
        return n ** 2;
    }

    // ** 지수연산자(제곱)
    // c =Math.sqrt(a**2 + b**2);
    c = Math.sqrt(power(a) + power(b));
    console.log(c);
}

/* 
    자바스크립트에서 함수는 "값"으로 취급된다.
    1. 변수에 대입할 수 있고
    2. 함수의 매개인자로 전달될 수 있고
    3. 리턴값으로 사용될 수 있다.
*/
function test5() {
    // 함수를 값으로써 매개인자로 전달하기.
    exec(function (str) {
        console.log("hello " + str);
    });
}

var names = ['html', 'css', 'havascript', 'jquery'];

function exec(fn) {
    for (var i = 0; i < names.length; i++) {
        fn(names[i]);
    }
}

function test6() {
    // 함수를 리턴값으로 사용하기
    var hello = returnFunction('hello');
    hello('js');

    returnFunction("goodbye")("js");
}

function returnFunction(say) {
    return function (name) {
        // var say = say;
        console.log(say + " " + name);
    };
}

var cnt = 0; // 전역변수(Global/script scope)

function test7() {
    // local scope(함수 내부의 스코프
    // debugger;
    var a = 0;
    console.log("globla : " + ++cnt);
}

/* 
    클로저(Closure)
     - 중첩함수에서 하위 함수가, 상위함수의 변수를 참조할 때 생겨나는 스코프
     - 하위함수에서 상위함수의 변수값을 참조하는 경우, 하위함수의 closere 스코프에 변수값을 추가한다.
     - 클로져로 이해, Stack메모리에서 상위함수의 메모리가 제거되더라도
       상위함수의 변수를 그대로 가져다 사용할 수 있다.
*/
function funcY() {
    var num = 100;
    function funcZ() {
        debugger;
        console.log("num=", num);
    }
    return funcZ;
}
const myFn = funcY();
// myFn();

function makeClosureCounter() {
    var cnt = 0;
    return function () {
        console.log('closureScope : ' + ++cnt);
    }
}

var test8 = makeClosureCounter();
var test9 = makeClosureCounter();