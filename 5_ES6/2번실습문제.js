// Q1
const obj = {
    name: "홍길동",
    normalFn: function() {
        console.log("일반 함수:", this.name);
    },
    arrowFn: () => {
        console.log("화살표 함수:", this.name);
    }
};

obj.normalFn(); // 일반 함수: 홍길동
obj.arrowFn();  // 화살표 함수: undefined

// Q2
const person = {
    name: "안찰스",
    greet: function() {
        const innerArrow = () => console.log(this.name);
        const innerNormal = function() { console.log(this.name); };
        
        innerArrow();
        innerNormal();
    }
};

person.greet();
// innerArrow 출력: 안찰스
// innerNormal 출력: undefined

// Q3
function User(name) {
    this.name = name;
    setTimeout(function() {
        console.log("Hello, " + this.name);
    }, 1000);
}

new User("찰스"); // "Hello, undefined"
// 생성자 함수와 setTimeout은 별도로 돌아가기에 setTimeout에서만 반복실행되어 this은 global을 가리키게 된다. = undefined
// 화살표함수로 상위 스코프의 name을 가져오게 바꾸면 해결

// Q4
const tom = {
    name : 'Tom',
    sayName : function(){
        console.log(this.name);
    }
}

const alice = { name: "Alice" };

tom.sayName(); // Tom
tom.sayName.call(alice); // Alice

// Q5
this.tag = "Error";

function print() {
  console.log(this.tag); 
}
const obj2 = { tag: "OK" };

const boundPrint = print.bind(obj2);

print(); // global.this.tag = Error???
boundPrint(); // OK