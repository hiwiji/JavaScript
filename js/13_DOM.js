// 노드 확인하기

//광범위하게 

// 버튼값 가져오기
document.getElementById("btn1").addEventListener("click", function() {

    // 부모
    // 요소.parentNode : 요소의 부모 노드를 탐색해서 반환

    // 자식
    // 요소.childNodes : 요소의 자식 노드를 모두 반환(NodeList 형태) // 자식이 한두명이 아닐 수 있으니
    // 요소.firstChild : 첫 번째 자식 노드를 탐색해서 반환
    // 요소.lastChild : 마지막 자식 노드를 탐색해서 반환
    // 요소.childNodes[인덱스] : 인덱스 번째 자식 노드를 탐색해서 반환

    // 형제
    // 요소.previousSibling : 요소의 이전 형제 노드를 반환
    // 요소.nextSibling : 요소의 다음 형제 노드를 반환

    // #test의 자식노드를 모두 얻어와서 확인
    
    //testNodeList라는 상수하나 만들기
    const testNodeList = document.getElementById("test").childNodes;

    console.log(testNodeList);

    // 노드 탐색
    const li1 = document.getElementById("li1");
    console.log(li1.parentNode); // 부모 노드 탐색 (ul#test)

    // #li1의 부모 배경색을 orange로 변경
    li1.parentNode.style.backgroundColor = 'orange';

    // #li의 부모 노드의 마지막 부분에 "ABCD" 라는 text node 추가
    // 요소.append(요소 또는 노드) : 마지막 자식으로 추가
    li1.parentNode.append("ABCD");


    // 실습 //

    const test = document.getElementById("test");
    // #test의 첫번째 자식노드 찾기
    console.log(test.firstChild);

    // #test의 마지막 자식노드 찾기
    console.log(test.lastChild);

    // #test의 자식 노드 중 5번째 인덱스 노드 찾기
    console.log(test.childNodes[5]);

    // #test의 자식 노드 중 5번째 인덱스 노드의 마지막 자식으로 "ZZZ" 추가하기
    test.childNodes[5].append("ZZZ");

    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling);  // 4번

    // #test의 자식 노드 중 5번째 인덱스의 다음 형제 노드
    console.log(test.childNodes[5].nextSibling); // 6번

    // 노드 탐색 구문 연속 작성
    // #test의 자식 노드 중 5번째 인덱스의 이전 형제 노드의 이전 형제 노드
    console.log(test.childNodes[5].previousSibling.previousSibling);
})

// Element(요소) 탐색 확인
document.getElementById("btn2").addEventListener("click", function() {

    // children : 자식 요소만을 모두 선택
    // parentElement : 부모 요소 선택

    // firstElementChild : 첫 번째 자식 요소 선택
    // lastElementchild : 마지막 자식 요소 선택

    // previousElementSibling : 이전 형제 요소 선택
    // nextElementSibling : 다음 형제 요소 선택




    // 부모요소, 자식요소 얻어오기
    const test = document.getElementById("test"); // 부모요소
    const li1 = document.getElementById("li1");  // 자식요소

    // #li1의 부모요소 탐색
    console.log(li1.parentElement);

    // #li1의 부모요소의 부모요소 탐색
    console.log(li1.parentElement.parentElement);

    // #test의 모든 자식 요소 탐색
    const list = test.children; // HTMLCollection 형태로 반환
    // test는 Node(textNode포함)여서 element 쓸 때, html요소만 불러오는거임
    // 그냥 일반 element 하는것처럼 하면 underfined 뜸 
    console.log(list);
    

    // #test의 첫 번째 자식 요소 탐색
    console.log(test.firstElementChild);

    // #test의 마지막 자식 요소 탐색
    console.log(test.lastElementChild);



    /*************** 여기서부터 공부하기 ************* */
    // #test의 자식 요소 중 2번째 인덱스의 이전형제 요소 클릭 시
    // 작성된 내용을 alert로 출력
    list[2].previousElementSibling.addEventListener("click", function() {
        
        // this는 이벤트가 발생한 요소 
        // #test의 자식요소 중 2번재 인덱스의 이전 형제 요소를 말함
        alert(this.innerText);

        // 해당 요소의 다음 형제의 다음형제 요소의 배경색을 red로 변경
        this.nextElementSibling.nextElementSibling.style.backgroundColor ='red';

    })

})

//innerHTML
const btn3 = document.getElementById("btn3");
const div3 = document.getElementById("div3");

let count3 = 1;

// 버튼 클릭할 때 이벤트 주기
btn3.addEventListener("click", function() {
    // count3 가 10 이하면
    if(count3 <= 10) {
        const input = "<input type='text'>";

        div3.innerHTML += "<div>" + count3 + input + "</div>";
        
        count3++;
    }
    
})


// 실무에서는 이걸 더 많이 사용함. innerHTML보다
//createElement()
const btn4 = document.getElementById("btn4");
const div4 = document.getElementById("div4");

let count4 = 1;

// 버튼한테 이벤트 주기
btn4.addEventListener("click", function() {

    if(count4 <= 10) {
        //document.createElement("태그명");
        // -> 이거 쓸 때는 해당 태그 요소를 생성만하여 반환
        // -> 요소가 생성될 뿐이지 화면 추가되는 것이 아니다!

        const div = document.createElement("div");
        const input = document.createElement("input");

        // #div4 > div > input

        // div의 내용으로 count4 추가 후 1 증가
        div.innerText = count4;
        count4++;

        // input을 div의 마지막 자식으로 추가
        div.append(input);
        
        div4.append(div);
    }
})