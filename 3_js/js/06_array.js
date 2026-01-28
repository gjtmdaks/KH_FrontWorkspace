test1.onclick = function(){
    /* 
        자바스크립트의 배열은 크기제한이나, 타입제한이 없으며 유용한 메서드들이
        존재한다.(ArrayList와 비슷)
    */
    var arr1 = []; // 권장
    var arr2 = new Array();
    var arr3 = new Array(3); // 크기지정

    console.log(arr1, arr2, arr3);

    // 값대입
    arr1[0] = 'a';
    arr1[1] = 'b';
    arr1[2] = 'c';

    // 값 가져오기
    console.log(arr1[2]);
    console.log(arr1[100]); // undefined 반환

    // 반복문
    // basic loop문
    for(var i=0; i<arr1.length; i++){
        console.log(arr1[i]);
    }

    // 향상된 반복문
    // 1. for .. in문
    //  - 객체, 배열 모두 반복이 가능
    //  - 객체 반복시 i에는 객체의 속성명이 대입
    //  - 배열 반복시 i에는 배열의 인덱스가 대입된다.
    for(var i in arr1){
        console.log(i , arr1[i])
    }

    /* 
        2. for .. of문
         - java의 향상된 반복문과 가장 비슷한 구문으로, 배열유형의 데이터를
           반복시키기 위해 사용한다.
         - i에는 각 인덱스에 저장된 값이 대입된다.
         - 객체는 반복이 불가능하다.
    */
    for(var item of arr1){
        console.log(item);
    }
};

test2.onclick = function(){
    var arr1 = [1,2,3];
    var arr2 = new Array("철수", "영희", "김밥");

    var arr3 = [
        1,2,3,
        "안녕", true, {id : "mkm"}, ['a','b'],
        function(){console.log('zz')}
    ];

    arr3[7]();
};


test3.onclick = function(){
    var arr = ['apple','melon','mango','banana','melon'];
    console.log(arr.indexOf('melon'));
    console.log(arr.lastIndexOf('melon'));
    console.log(arr.indexOf('strawberry')); // 배열내에 없으면 -1 반환
};

test4.onclick = function(){
    var arr1 = ['a','b','c'];
    var arr2 = [1,2,3,4,5];

    var newArr = arr1.concat(arr2);
    console.log(newArr);
    console.log(arr1);
};

test5.onclick = function(){
    // join : 배열 내부의 요소를 하나로 뭉친 문자열 리턴
    var arr = [1,2,3,4,5];
    var str = arr.join(); // "1,2,3,4,5"
    console.log(str);
    
    var str = arr.join("");
    console.log(str);
};

test6.onclick = function(){
    var arr = [1,2,3,4,5];
    arr.reverse(); // 원본 배열의 정렬 순서를 변경
    console.log(arr);
};

test7.onclick = function(){
    var arr = [3,5,2,1,4];
    console.log(arr.sort()); // 원본 배열을 정렬
    
    // 내림차순 정렬
    // 정렬기준을 "함수"로 만든다.
    arr.sort(function(a,b){
        // 오름차순 a-b
        // 내림차순 b-a
        return b-a;
    });
    console.log(arr);

    // 문자열 정렬 : 오름차순
    var names = ["홍길동","김길동","라마단","다나가"];
    console.log(names.sort());

    // 내림차순?
    names.sort(function(a,b){
        // 문자간에는 사전 등록순으로 대소비교 가능 'a'<'b'<'c' / '가' < '나'
        if(a>b) return -1; // a가 후순위 문자면 앞으로 이동 -> ㅎ이 가장 앞으로
        if(a<b) return 1;
    });
    console.log(names);

    // sort메서드의 기본 정렬은 "문자열 기준"정렬
    arr = [1,2,15]; // '1','2','15'
    console.log(arr.sort()); // 1, 15, 2
    // "2" > "15" true

    console.log(arr.sort(function(a,b){
        return a-b; // 따라서 숫자 정렬은 반드시 따로 만들어야 한다.
    }))
};

/* 
    push : 배열 마지막에 요소를 추가한 후, 변경된 길이를 반환
    pop : 배열 마지막 요소를 제거한 후, 제거된 요소를 반환
*/
test8.onclick = function(){
    var arr = [];
    arr.push(1);
    arr.push(2);
    arr.push(3);

    console.log(arr);

    console.log(arr.pop());
    console.log(arr.pop());
    console.log(arr);
};
/* 
    ㅁㅁㅁㅁㅁ
    0 1 2 3 4
    shift   pop
*/

/* 
    unshift : 배열의 0번 인덱스에 요소 추가후, 변경된 길이 반환
    shift : 배열의 0번 인덱스의 요소 제거 후, 제거된 요소를 반환
*/
test9.onclick = function(){
    var arr = ['사과','배','귤'];
    arr.unshift('감자');
    arr.unshift('양파');

    console.log(arr);

    console.log(arr.shift());
    console.log(arr.shift());
    console.log(arr);
};

/* 
    slice(star, end)
     - start인덱스부터 end인덱스까지의 요소를 가져와서 새배열 반환
*/
test10.onclick = function(){
    var arr = ['a','b','c','d','e'];
    // b,c,d만 추출
    var other = arr.slice(1,4);
    console.log(other);
    console.log(arr); // 원본 배열에 영향 X
};

/* 
    splice(start, deleteCount, [추가할요소 1, 2,...])
     - 중간위치에 요소를 추가하거나 삭제하는 메서드
     - start인덱스부터, deleteCount개의 요소를 제거하고,
       추가할 요소들을 추가한다.
*/
test11.onclick = function(){
    var arr = ['a','b','c','d','e'];
    console.log(arr);

    // a x y c d e
    arr.splice(1,1,'x','y');
    console.log(arr);

    // a x k h e
    arr.splice(2,3,'k','h');
    console.log(arr);

    // a x f r i k h e
    arr.splice(2,0,'f','r','i');
    console.log(arr);

    // a b
    arr.splice(1,arr.length,'b'); // 7 써도 됨
    console.log(arr);
};

/* 
    * prompt를 이용해 사용자의 취미리스트를 입력받으세요.
    * 예) 농구,수영,캠핑,낚시
    * ,구분자로 잘라서 배열로 담은후,
    * 사전순 정렬이후, ul#hobby-list의 자식li태그로 추가하세요.
*/
test12.onclick = function(){
    var hobbies = prompt("취미를 입력하세요..");
    var arr = hobbies.split(",").sort();

    var result = "";
    for(var hobby of arr){
        result += "<li>"+hobby+"</li>";
    }

    ul = document.querySelector("#hobby-list");
    ul.innerHTML = result;


    /* var a = prompt("취미리스트를 입력하세요.\n* 예) 농구,수영,캠핑,낚시");
    var arr = a.split(',');
    arr.sort();

    var ul = document.querySelector("#hobby-list");
    for(var i of arr){
        var li = document.createElement("li");
        li.innerHTML = i;
        ul.appendChild(li);
    } */
};

/* 
    forEach(function(vlaue, index){
        // 실행할 구문
    })
*/
test13.onclick = function(){
    var arr = [1,2,3,4,5];
    var sum = 0;

    arr.forEach( (num, index, arr2) => { // arr2 = this 현재 실행돠고 있는 배열
        console.log(num , index , arr2);
        sum += num;
    });
    console.log(sum);

    // forEach메서드는 유사배열도 사용이 가능.
    var btnArr = document.querySelectorAll("input[type=button]");
    var btnValues = [];
    btnArr.forEach(function(btn){
        btnValues.push(btn.value);
    });
    console.log(btnValues);
};

/* 
    array에서만 사용 가능한 함수

    find : 배열에서 내가 지정한 조건을 만족하는 1개의 요소 반환
    filter : 배열에서 내가 지정한 조건을 만족하는 n개의 요소를 담은 배열 반환
    map : 배열안의 데이터를 내가 원하는 요소로 변경시켜 반환
*/
test14.onclick = function(){
    var objArr = [
        {id : 'alsrudals', name : '경민'},
        {id : 'alsrudals2', name : '경민2'},
        {id : 'alsrudals3', name : '경민3'},
        {id : 'alsrudals4', name : '경민4'},
    ];

    var findOne = objArr.find(function(obj){
        if(obj.id == 'alsrudals'){
            return true;
        }
    });
    // 존재하지 않는 경우 undefined 반환
    console.log(findOne);

    var filteredArray = objArr.filter(function(obj){
        if(obj.id.includes('alsrudals')){
            return true;
        }
    });
    console.log(filteredArray);

    var mappedArr = objArr.map(function(obj){
        return obj.name;
    });
    console.log(mappedArr);
};

/*
    * 1) 배열 drink에 #drink태그의 자식li태그 텍스트를 추가. (forEach활용)
    * ['coke', 'juice', 'coffee', 'beer', 'wine']
    
    * 2) 배열 drink에서 'ff'가 들어가는 요소를 선택해서 findOne 반환. (find 활용)
    *  coffee
    
    * 3) 배열 drink에서  'o'가 들어가는 요소들을 선택해서 filteredArr 반환. (filter활용)
    * ['coke','coffee']
    
    * 4) 배열 drink를 활용하여 음료객체 배열을 생성 한후 mappedDrink에 반환(map 활용)     *
    * [{"menu": "coke","price": 2000},{"menu": "juice","price": 1600},{"menu": "coffee","price": 4000},
    *  {"menu": "beer","price": 8000},{"menu": "wine","price": 15000}]
*/
test15.onclick = function(){
    var drink = [];
    var findOne ;
    var filteredArr;
    var mappedDrink;
    var priceArr = [2000, 1600, 4000, 8000, 15000];

    // 1번
    document.querySelectorAll("#drink>li").forEach(function(li){
        drink.push(li.innerHTML);
    });

    // var ul = document.querySelectorAll("#drink>li");
    // ul.forEach(element => {
    //     drink.push(element.textContent);
    // });
    console.log(drink);

    // 2번
    findOne = drink.find(function(d){
        return d.includes("ff");
    });

    // findOne = drink.find(function(obj){
    //     if(obj.includes('ff')) return true;
    // });
    console.log(findOne);

    // 3번
    filteredArr = drink.filter(function(d){
        return d.includes("o");
    });

    // filteredArr = drink.filter(function(obj){
    //     if(obj.includes('o')) return true;
    // });
    console.log(filteredArr);
    
    // 4번
    mappedDrink = drink.map(function(d, i){
        return {menu : d, price : priceArr[i]};
    });

    // mappedDrink = drink.map(function(obj){
    //     for(var p of priceArr){
    //         return {menu : obj , price : p}
    //     }
    // });
    console.log(mappedDrink);
}