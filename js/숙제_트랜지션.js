





// 버튼 클릭할 때 
document.getElementById("btn1").addEventListener("click", function() {

    //input값("trandura") 가져온걸 trandura 변수에 담기 
    const trandura = document.getElementById("trandura");

    //옆에 뜨는 span 결과값("result") 가져온걸 result1 변수에 담기 
    const result1 = document.getElementById("result1");

    //결과값변수.innertext = input변수.input변수값
    result1.innerText=trandura.value + "초";

    const box1 = document.getElementById("box1up");
    const box2 = document.getElementById("box2up");
    const box3 = document.getElementById("box3up");
    const box4 = document.getElementById("box4up");
    const box5 = document.getElementById("box5up");
    
    // const trandura = document.getElementById("trandura");
    box1.style.transitionDuration = trandura.value + "s";
    box2.style.transitionDuration = trandura.value + "s";
    box3.style.transitionDuration = trandura.value + "s";
    box4.style.transitionDuration = trandura.value + "s";
    box5.style.transitionDuration = trandura.value + "s";
    


})








/* 첫 번째 박스 색칠하기 */ 
// input은 .value로 가져오면 된다.

//input박스에 글을 쓸 때 
document.getElementById("box1text").addEventListener("keyup", function() {

    // 색깔 변할 박스 요소 얻어오기 
    const box1 = document.getElementById("box1up");

    //박스변수 스타일은 인풋값과 같다.
    box1.style.backgroundColor=this.value;

    // 입력된 폰트색 = 인풋값과 같다.
    this.style.color=this.value;
})




/*두 번째 박스 색칠하기 */ 

// 인풋값에 글을 쓸 때 
document.getElementById("box2text").addEventListener("keyup", function() {

    // 박스 가져오기
    const box2 = document.getElementById("box2up");

    // 박스 색깔 인풋값과 같다
    box2.style.backgroundColor=this.value;

    //박스색깔 = 인풋값 폰트색과 같다.
    this.style.color=this.value;

})


// 3번인풋값에 글씨를 넣을 때
document.getElementById("box3text").addEventListener("keyup", function() {

    // 박스를 가져옵니다.....
    const box3 = document.getElementById("box3up");

    // 박스 색깔을 바꿔줍니다. 인풋값에 맞게
    box3.style.backgroundColor=this.value;

    // 박스색깔과 = input글씨색이 같습니다.
    this.style.color=this.value;
})



//4번 

// 인풋값에 글씨를 넣을 때 
document.getElementById("box4text").addEventListener("keyup", function() {

    //색살 채울 박스요소 가져오기
    const box4 = document.getElementById("box4up");

    // 박스에 색상 넣기
    box4.style.backgroundColor=this.value;

    // 박스에 색상 넣으면 인풋값에도 색상 넣기
    this.style.color=this.value;
})

// 인풋값에 글자를 입력. 인풋값 가져오기
document.getElementById("box5text").addEventListener("keyup", function() {
    
    //색상 담을 박스 가져오기
    const box5 = document.getElementById("box5up");

    //박스에 색상 넣기
    box5.style.backgroundColor=this.value;

    //박스색상과 인풋글씨 색은 같음
    this.style.color=this.value;
})
