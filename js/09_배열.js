// 배열확인

document.getElementById("btn1").addEventListener("click", function() {
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [];
    const arr4 = ['사과','딸기','바나나'];

    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    console.log(arr4)

    // 배열에 존재하지 않는 인덱스에 값 대입
    // -> 자동으로 추가되면서 길이가 증가함
    arr1[0] = "김밥";
    arr1[1] = 5000;
    arr1[2] = true;
    // 중간 인덱스 건너뛰면, 건너 뛴 부분은 empty로 남음
    arr1[5] = 111;  // 추가가능ㅇ

    console.log(arr1)


    //for문으로 배열 요소 반복 접근하기

    // 1. 일반 for문 사용 - 배열, 컬렉션
    // for(let i = 0; i < arr4.length; i++) {
    //     console.log(arr4[i]);
    // }


    // 2. 배열.forEach(function(item,index) {반복수행 코드} ) - 배열
    // 배열일 때 만 사용 가능
    // - item: 현재 접근중인 요소
    // - index : 현재 인덱스

    // * 여러 요소를 얻어온 경우(HTMLCollection,  NoeeList)는
    // 배열이 아니므로 forEach()문을 쓸 수 없다.
    // arr4.forEach(function (a, i) {
    //     console.log( i + " : " + a)
    // })

  
    // 3. for(item of 배열(또는 컬렉션 )) {} - 배열, 컬렉션
    //      (Symbol.iterator가 존재하는 객체에 사용가능함)
    // Java 향상된 for문과 비슷하게 생김

    for(let item of arr4) {
        console.log(item)
    }

    // li태그에 작성된 값 얻어와서 합 구하기 
    const list1 = document.getElementsByTagName("li"); // HTMLCollection
    const list2 = document.querySelectorAll("#test > li"); // NodeList

    //console.log(list1)
    //console.log(list2)



    let sum = 0;
    for(let item of list2) {
        sum += Number(item.innerText)
    }

    console.log("sum : " +sum) // 결과값 150


    
    // 4. for (let key in 객체) - JS객체용 for문

    //지금은 예시가 없어서 패스
    // 다음에 쓸 때 다시 한번 설명해줄 예정 

})

// 배열 관련 함수 확인.
document.getElementById("btn2").addEventListener("click", function() {
    // 비어있는 배열 생성
    const arr = [];

    arr.push("조");
    arr.push("미");
    arr.push("현");
    arr.push("천");
    arr.push("재");

    console.log(arr)  // ['조', '미', '현', '천', '재']

    console.log(arr.toString()); // 조,미,현,천,재

    arr.pop();
    console.log(arr);  ['조', '미', '현', '천']

    const temp = arr.pop();
    console.log(temp); // 천


    console.log(arr.indexOf('현'));  // 2  (있으면 있는곳 index자리)
    console.log(arr.indexOf('재')); // -1  (없으면 -1 출력)

    console.log(arr.sort())  // 4개가 아닌 3개??  ['미', '조', '현'] 왜져...

    const numArr = [5,3,2,10,1]; 
 
    console.log(numArr.sort(function(a,b) { return a - b; } ))
    //  [1, 2, 3, 5, 10]

    console.log(numArr.sort(function(a,b) { return b - a; } ))
    //  [10, 5, 3, 2, 1]

    // * sort() 함수는 원본 배열의 순서를 정렬함
    // -> 원본 훼손 발생 ( 깊은 복사를 이용해 해결함
    console.log(numArr)
    
})


// 로또 번호 생성
document.getElementById("btn3").addEventListener("click", function() {

   
    const lotto = []; // 빈배열

    while ( lotto.length < 6 ) { //배열요소가 6개 미만이면 반복
    
        const ran = Math.floor(Math.random() * 45 + 1); // 1 ~ 45 난수

        
        // 중복 검사
        if(lotto.indexOf(ran) == -1) {// 배열에 난수 값이 없다면
            //.indexOf(): 일치하는 값을 가진 index반환 
            lotto.push(ran);
            // .push()배열마지막 요소로 추가
        }
    }

    lotto.sort(function (a,b) { return a-b } ) //.sort : 오름차순 정렬
    console.log('로또번호 : ' + lotto)
                                    
}) 