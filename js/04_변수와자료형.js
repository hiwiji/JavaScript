var str = "JS 코드는 함수가 아닌" 
        + "JS 파일 또는 script태그 내부에 바로 작성하면 "
        + "HTML 랜더링 시 바로 수행된다.";

console.log(str);

// 변수 선언 위치에 따른 구분
var num1 = 100; // 전역변수
num2 = 200; // 전역변수

console.log("num1 : " + num1 );
console.log("num2 : " + num2 );

function test() { //test함수 정의
    var num3 = 300; // function 안에 있는 지역변수
    num4 = 400; // 전역변수
     
    console.log("함수 내부 num3 : " + num3);
    console.log("함수 내부 num4 : " + num4);

    if(true) {
        var num5 = 500; // 지역변수
        num6 = 600; // 전역변수
    }

    console.log("if문 종료 후 num5 : " + num5);
    console.log("if문 종료 후 num6 : " + num6);
}

test(); // 함수 호출

// console.log("함수 외부 num3 : " + num3); // num3 is not defined
// 함수 종료 후에는 사용 불가

// *** script 언어는 중간에 에러가 발생하면 해석을 멈춘다 *** 

console.log("함수 외부 num4 : " + num4);
// 함수 종료 후에도 사용 가능

console.log("함수 외부 num6 : " + num6);

// var 변수명 중복 확인
var num1 = 999;
console.log("var num1 중복확인 :" + num1);
// 위에서 num1 은 이미 100을 줬는데, 여기서 num1에 999라고 또 줌
// => var는 중복 가능하다. (코드 혼란이 옴 @@)


// 자료형 확인 (+ 변수 선언 방법)
function typeTest() {
    let temp1 = 100;
    // let temp1 = 200; // 변수명 중복 X (주석 풀면 오류뜸)
    // 블록 범위 변수 'temp1'을(를) 다시 선언할 수 없습니다.

    if(true) {
        // 블록 범위 확인
        let temp2 = 200;
        const temp3 = 300;
        //temp3 = 400; // Assignment to consttant variable
                    // 상수형 변수에 값을 할당할 수 없음을 나타내는 error
    }

    console.log(temp1);
    //console.log(temp2);   //error
    //console.log(temp3);    //error  3번 오류 확인하기 



    // ------------------------------------------------------------------
 
    // 자료형 확인
    const typeBox = document.getElementById("typeBox");
    typeBox.innerHTML = ""; // typeBox 요소 내부의 내용을 빈 문자열로 바꿔라
                            // == 내부 내용 삭제

    //const name2; // 상수는 선언과 동시에 초기화가 필수!!

    let name; // undifined
    typeBox.innerHTML += "name : " + name + " / " + typeof name;
                        // name : undefined / undefined  ?????? 왜져??????/

    name = "홍길동"; // undefined -> string
    
    // typeof 변수명 : 해당 변수의 자료형을 반환하는 연산자.
    typeBox.innerHTML += "<br><br>name : " + name + " / " + typeof name;
                        // name : 홍길동 / string

    // number
    const age = 20;
    const height = 178.9;
    typeBox.innerHTML += "<br><br>age : " + age + " / " + typeof age;
    typeBox.innerHTML += "<br><br>age : " + outerHeight + " / " + typeof height;

    // boolean
    const isTrue = true;
    typeBox.innerHTML += "<br><br>isTrue : " + isTrue + " / " + typeof isTure;

    // object(배열, JS객체)
    // 배열 선언과 동시에 초기화
    // (Java) 
    // int[] arr = { 10, 20, 30, 40 50};

    const arr= [10, 20, 30, 40, 50];

    typeBox.innerHTML += "<br><br>arr : " + arr + " / " + typeof arr;

    for(let i = 0; i <arr.length; i++) {
        typeBox.innerHTML += "<br><br>arr[" + i + "] : " + arr[i] + "/" + typeof arr[i];
    }

    // ** JS 객체 **  (프로젝트에 많이 쓸거예여~~~)
    // - K:V 쌍으로 이루어짐 (Map 형식)
    // - Key는 무조건 String 형태
    // - 리터럴 표기법 : {}

    //const user = {"K" : V, "K": v}

    const user = { "id" : "user01", "pw" : "pass01" , "num": 123, "a" : arr };
    
    typeBox.innerHTML += "<br><br>user : " + user + " / " + typeof user;
    console.log(user);


    // 객체에 저장 된 값 출력
    typeBox.innerHTML += "<br>user.id : " + user.id;
    typeBox.innerHTML += "<br>user.pw : " + user.pw
    typeBox.innerHTML += "<br>user.num : " + user.num;
    typeBox.innerHTML += "<br>user.a : " + user.a
    typeBox.innerHTML += "<br>user.a[S2] : " + user.a[2];

    // function
    // 1) 변수명이 함수명이 된다.
    const fnSum = function(n1, n2) { // 익명함수
        return n1 + n2;
    }

    // 함수명만 작성하는 경우 => 함수명이 작성된 코드 자체가 반환
    typeBox.innerHTML += "<br><br>fnSum : " + fnSum + " / " + typeof fnSum;

    // 함수명(매개변수) ==  함수호출 (함수코드가 수행됨)
    typeBox.innerHTML += "<br><br>fnSum(1,2) : " + fnSum(1,2);

    // 2) 함수를 매개변수로 전달하는 형태

    function plusFn(num, fn) {

        return num + fn();
    }

    const result = plusFn(100, function() {return 30-10})

    typeBox.innerHTML += "<br><br>result : " + result;


}



