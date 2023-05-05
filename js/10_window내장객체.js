//window.setTimeout(함수, 지연시간(ms))

const btn1 = document.getElementById("btn1");
// 클릭한테 이벤트 주기
btn1.addEventListener("click", function() {
    // 0초(클릭하자마자 지연시간 X)
    this.style.backgroundColor = 'red';

    // 3초 후 orange로 변경
    window.setTimeout(function() {

        //window.setTimeout()에서 this == window 객체
        btn1.style.backgroundColor = 'orange';

    }, 3000);

    // 시간은 ms 단위여서 3초 = 3000임


    console.log("중간에 출력");

    // 6초 후 yellow로 변경
    window.setTimeout(function() {
        //window.setTimeout()에서 this == window 객체
        btn1.style.backgroundColor = 'green';
    }, 6000);


    // 9초 후 green 으로 변경
    window.setTimeout(function() {
        //window.setTimeout()에서 this == window 객체
        btn1.style.backgroundColor = 'green';
    }, 9000);
})


//현재 시간을 반환하는 함수(currentTime)
function currentTime() {
    const now = new Date(); // 현재 시간 정보를 저장하고 있는 객체 생성

    let hour = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    //얻어온 시간값이 10미만일 경우 앞에 0추가
    if(hour < 10) hour = "0"+ hour;
    if(min < 10) min = "0"+ min;
    if(sec < 10) sec = "0"+ sec;

    return hour + " : " + min + " : " + sec;
}


// 페이지가 로딩되자마자 #clock에 현재 시간 출력

const clock = document.getElementById("clock");
clock.innerText = currentTime();  
// 현재 시간을 얻어와서 반환해주는 함수 (cuttrentTime)


// // #clock에 1초마다 현재 시간을 출력하도록 하는 코드를 작성
// window.setInterval(function() {
//     clock.innerText = currentTime();
//     // 지연시간 1초니까 1000이라고 작성하기
// }, 1000); 

// #clock에 1초마다 현재 시간을 출력하도록 하는 코드를 작성
const interval = window.setInterval(function() {
    clock.innerText = currentTime();
    // 지연시간 1초니까 1000이라고 작성하기
}, 1000); 

// 현재시간 움직이는거 멈추는 코드작성
document.getElementById("stop").addEventListener("click", function() {
    window.clearInterval(interval);
})


//팝업창 열기 
const openPopup1 = document.getElementById("openPopup1");
const openPopup2 = document.getElementById("openPopup2");
const openPopup3 = document.getElementById("openPopup3");

openPopup1.addEventListener("click", function() {
    //새 탭에서 열기
    window.open("09_배열.html")
    
})

openPopup2.addEventListener("click", function() {
    //최소한의 팝업창 형태로 열기
    window.open("09_배열.html", "_blank", "popup")
    
})

openPopup3.addEventListener("click", function() {
    //옵션이 지정된 팝업창
    //옵션 작성 방법 : "K=V, K=V, K=V", 크기 단위 작성 X (px고정)
    
    const options = "width=400, height=500, top=50, left=400";
    // 어차피 픽셀이라 단위 안적어줘도 됨

    window.open("09_배열.html", "popupWindow", options);
    // popupWindow는 사용자 임의 지정값임.
    // options는 위에 설정한 변수값

})


// 팝업창(자식)열기
documnet.getElementById("sendChild").addEventListener("click", function() {
    const options = "width=300, height=300, top=50, left=700";
    window.open("팝업.html", "popupWindow", options)


})
