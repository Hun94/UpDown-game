// 게임 진행 순서
// 시작 버튼 누르면 랜덤 숫자가 만들어짐(별도 공지X)
// 몇번만에 맞출지 입력(고정?)
// 숫자 입력(이때, 옆에 공지 몇번 남았는지?)
// 실패 or 성공

let random_number;
let game_over=false;
let user_chance = 0;

let start = document.getElementById("start-button");
start.addEventListener("click", Start);

let check = document.getElementById("check-button");
check.addEventListener("click", Play);

let reset = document.getElementById("reset-button");
reset.addEventListener("click", Reset)

let submit = document.getElementById("submit-number"); 
let chance = document.getElementById("chance-number");
let result = document.getElementById("result-area"); 
let remain = document.getElementById("remain-chance")


function RN_maker () {
    random_number = Math.floor(Math.random()*100)+1;
    console.log("정답"+ random_number);    
}

function Start(){
    RN_maker();
    result.textContent = "시작"
    user_chance=chance.value;
    remain.textContent = chance.value;
}

function Play(){
    let user_input = submit.value;

    user_chance -- ;
    remain.textContent = user_chance;

    if(user_input>random_number){
        result.textContent = "Down"
    }
    else if(user_input<random_number){
        result.textContent = "Up"
    }
    else{
        result.textContent = "Correct"
    }

    if(user_chance<1){
        game_over = true;
        result.textContent = "Game Over"
    }

    if(game_over==true){
        check.disabled = true
    }

}
function Reset(){
    submit.value="";
    chance.value="";
    user_chance.value="";
    RN_maker();
    result.textContent = "Up or Down"
    remain.textContent = "Remain chance"
}
