// 형변환 확인하기

const btn1 = document.getElementsByClassName("btn1")[0];
// const btn1 = document.querySelector(".btn");
// 둘중에 하나 쓰면 됩니다.



btn1.addEventListener("click", function() {
    console.log("parseInt('123' : " + parseInt('123')); // 123
    console.log(typeof parseInt('123'));                // number
    // 위에 변환한게 number인지 string인지 확인하고 싶을 때
    // type of 사용
    console.log("parseInt('3.14' : " + parseInt('3.14')); //3
    console.log("=======================================")

    console.log("parseFloat('123' : " + parseFloat('123')); //123
    console.log("parseFloat('123' : " + parseFloat('123')); //123
    console.log("=======================================")

    console.log("Number('123' : " + Number('123')); //123
    console.log("Number('3.14' : " + Number('3.14')); // 3.14
})



//isNaN(값)
const input2 = document.getElementById("input2");
const btn2 = document.getElementById("btn2");


// 버튼 눌렀을 때 이벤트 줘야함
btn2.addEventListener("click" , function() {

    if (isNaN(input2.value)) {
        alert("숫자가 아닙니다")
        // 숫자가 아니면 true
    } else {
        alert("숫자 입니다.")
        //숫자면 false
    }

})


//Math.random()
document.getElementById("btn4").addEventListener("click", function() {

    // rgb에 색상 랜덤 대입 ( 0 ~ 255 사이)
    const r = Math.floor(Math.random() * 256);
    // 0 <= random 256 // 0~256까지 //
   
    // 실수로 나오기 때문에 floor로 덮어줌 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    document.querySelector("body").style.backgroundColor
        = "rgb(" + r + "," + g + "," + b + ")";

})


