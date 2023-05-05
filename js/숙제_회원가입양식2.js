
// 1. 아이디 : 이벤트 (값이 변했을 때) 
// - 영어 소문자로 시작하고, 영어 대/소문자, 숫자, - , _ 로만 이루어진 6~14 글자 사이 문자열인지 검사
// - 형식이 일치할 경우, 입력창의 배경색을 springgreen 으로 변경
// - 형식이 일치하지 않은 경우 입력창의 배경색을 red, 글자색을 white 로 변경


//인풋창에 아이디 입력 할 때  ㅠㅠㅠㅠ
document.getElementById("inputId").addEventListener("change", function() {

    const regEx = /^[a-zA-Z0-9-_]{6,14}$/;

    if (regEx.test(inputId.value)) {
        idbox.sytle.background= "springgreen";

    } else { inputId.style.background= "red";
        idbox.style.color= "white";
    }
})


// 2. 비밀번호/ 비밀번호 확인 (키보드가 올라올 때)
// - 정규식 따로 없음
// - 비밀번호 / 비밀번호 확인 값이 동일할 때 "비밀번호" 입력창 오른쪽에 "비밀번호 일치" 글자를 초록색으로 출력.
// - 일치하지 않을 경우 "비밀번호" 입력창 오른쪽에 "비밀번호가 불일치" 글자를 빨간색으로 출력
 
document.getElementById("inputPw").addEventListener("keyup", function() {
    
    const inputPw = document.getElementById("inputPw");
    const inputPw2 = documnet.getElementById("inputPw2");

    if(inputPw = inputPw2) {
        pwCheckO.innerText = "비밀번호 일치";
        pwCheckO.style.color = "green";
    
    } else {
        pwCheckX.innerText = "비밀번호 불일치";
        pwCheckX.style.color = "red";
    }    
})

// 3. 이름 (값이 변했을 때)
// - 한글 2~5 글자 사이 문자열인지 검사.
// - 형식이 일치할 경우 "이름" 입력창 오른쪽에 "정상입력" 글자를 초록색으로 출력.
// - 형식이 일치할 경우 "이름" 입력창 오른쪽에 "한글만 입력하세요" 글자를 빨간색으로 출력.

document.getElementById("inputName").addEventListener("change", function() {

   
    const regEx = /^[ㄱ-힣]{2,5}$/;
    const inputName = document.getElementById("inputName");

    if(regEx.test(this.value)) {
    
        inputName.innerText = "정상입력";
        inputName.classList.add("nameCheck");
        inputName.classList.remove("error");
        nameCheck.style.color = "green";
    } else {
        inputName.innerText = "한글만 입력하세요";
        inputName.classList.add("nameCheck");
        inputName.classList.remove("error");
        nameCheck.style.color = "red";
    }

})


// 4. 회원가입 버튼 클릭 시 : validate() 함수를 호출
// - 성별 미 선택 시 "성별을 선택해주세요." 경고창(==대화상자) 출력 (출력 후 다음 경고창 뜨지 않도록)
// - 전화번호 형식이 올바르지 않을 경우 "전화번호의 형식이 올바르지 않습니다" 경고창(==대화상자) 출력 (출력 후 다음 경고창 뜨지 않도록)
// - 전화번호 형식
// : 0으로 시작, (02/010) 가능하도록 0뒤에 1~2글자 가능. 가운데 번호 3~4글자, 마지막번호 4글자 하이픈 넣기 
// ex) 02-985-1010 (O)
// ex) 010-1111-1111(O)
// ex) 11-2050-1111 (X)
// ex) 01011111111(X)


document.getElementById("join").addEventListener("click", validate(

    //전화번호 정규표현식 
    /^0\d{1,2}-\d{3,4}-\d{4}$/
))