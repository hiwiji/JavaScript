// 아이디
document.getElementById("inputId").addEventListener("keyup", function() {
    
    //영문 소문자 + 숫자 / 5글자 이상
    const regEx1 = /^[a-z0-9]{5,}$/; 
    
    const result1 = document.getElementById("result1");

    if(regEx1.test(this.value)) {
        result1.innerText = "아이디 사용가능"

        result1.classList.add("confirm1");
        result1.classList.remove("error");

    } else {
        result1.innerText = "아이디 사용 불가능"
        result1.classList.add("error");
        result1.classList.remove("confirm1");
    }
})



// 비밀번호
document.getElementById("inputPw").addEventListener("keyup", function() {
    
    // 영문대/소문자 + 특수문자 + 숫자 / 8글자 이상
    const regEx2 = /[a-zA-Z0-9*~!@#$%^&*()_+|<>?:{}*]{8,}/; 
    /*~!@#$%^&*()_+|<>?:{}*/
    const result2 = document.getElementById("result2");

    if(regEx2.test(this.value)) {
        result2.innerText = "비밀번호 사용가능"

        result2.classList.add("confirm2");
        result2.classList.remove("error");

    } else {
        result2.innerText = "비밀번호 사용 불가능"
        result2.classList.add("error");
        result2.classList.remove("confirm2");
    }

})


// 비밀번호 확인
document.getElementById("inputPw2").addEventListener("keyup", function() {
    
    // 영문대/소문자 + 특수문자 + 숫자 / 8글자 이상
    const regEx3 = /[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{8,}$/; 
    
    const result3 = document.getElementById("result3");

    if(result2.value==result3.value) {
        result3.innerText = "일치합니다."

        result3.classList.add("confirm3");
        result3.classList.remove("error");

    } else {
        result3.innerText = "불일치합니다."
        result3.classList.add("error");
        result3.classList.remove("confirm3");
    }

})



// 이름
document.getElementById("inputName").addEventListener("keyup", function() {

    // 한글 2글자 이상 문자열
    const regEx4 = /^[ㄱ-힣]{2,}$/;
    // 패턴이 맞을경우 T, 틀릴경우 F 반환

    const result4 = document.getElementById("result4");

    if(regEx4.test(this.value)) {
        result4.innerText = "유효한 형식 입니다."

        result4.classList.add("confirm4");
        result4.classList.remove("error");

    } else {
        result4.innerText = "잘못된 형식 입니다."
        result4.classList.add("error");
        result4.classList.remove("confirm4");
    }
})


// 휴대폰번호
document.getElementById("inputPhone").addEventListener("keyup", function() {



    // 숫자만 단, 010으로 시작
    const regEx5 = /^010[0-9]{0,8}$/;
    // 패턴이 맞을경우 T, 틀릴경우 F 반환

    const result5 = document.getElementById("result5");

    // regEx5.test(str1);

    if(regEx5.test(this.value)) {
        result5.innerText = "유효한 형식 입니다."

        result5.classList.add("confirm5");
        result5.classList.remove("error");

    } else {
        result5.innerText = "잘못된 형식 입니다."
        result5.classList.add("error");
        result5.classList.remove("confirm5");
    }
})

// 주민등록번호
document.getElementById("inputIdNumber").addEventListener("keyup", function() {

    //주민등록번호 ( 단, 7번째 숫자는 1,2,3,4만 가능)
    //[6글자]- [   ]
    const regEx6 = /^[0-9]{6}-[1-4][0-9]{6}$/;

    const result6 = document.getElementById("result6");

    if(regEx6.test(this.value)) {
        result6.innerText = "유효한 형식 입니다."

        result6.classList.add("confirm6");
        result6.classList.remove("error");

    } else {
        result6.innerText = "잘못된 형식 입니다."
        result6.classList.add("error");
        result6.classList.remove("confirm6");
    }

})

// 이메일
document.getElementById("inputEmail").addEventListener("keyup", function() {

    // @무조건 포함. 맨 뒤는 .com 으로 끝날 것
    const regEx7 = /^([0-9a-zA-Z]+)@([0-9a-zA-Z]+).com$/; 

    const result7 = document.getElementById("result7");

    if(regEx7.test(this.value)) {
        result7.innerText = "유효한 형식 입니다."

        result7.classList.add("confirm7");
        result7.classList.remove("error");

    } else {
        result7.innerText = "잘못된 형식 입니다."
        result7.classList.add("error");
        result7.classList.remove("confirm7");
    }

})


