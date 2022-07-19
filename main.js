// 게임 진행 순서
// 시작 버튼 누르면 랜덤 숫자가 만들어짐(별도 공지X)
// 몇번만에 맞출지 입력(고정?)
// 숫자 입력(이때, 옆에 공지 몇번 남았는지?)
// 실패 or 성공

let random_number;
let remaining_attempt;

let check = document.getElementById("check-button")
check.addEventListener("click", play);

let submit = document.getElementById("submit-number") 


function RN_maker () {
    random_number = Math.floor(Math.random()*100)+1;
    console.log("정답"+ random_number);    
}

function play(){
    let user_input = submit.value;
    
    if(user_input>random_number){
        console.log("Down");
    }
    else if(user_input<random_number){
        console.log("Up");
    }
    else{
        console.log("정답입니다.");
    }

}

RN_maker();

