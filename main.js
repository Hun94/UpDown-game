// 게임 진행 순서
// 시작 버튼 누르면 랜덤 숫자가 만들어짐(별도 공지X)
// 몇번만에 맞출지 입력(고정?)
// 숫자 입력(이때, 옆에 공지 몇번 남았는지?)
// 실패 or 성공

let random_number;
let game_over=false;
let user_chance = 0;
let history=[];

let start = document.getElementById("start-button");
start.addEventListener("click", Start);

let check = document.getElementById("check-button");
check.addEventListener("click", Play);

let reset = document.getElementById("reset-button");
reset.addEventListener("click", Reset)

let submit = document.getElementById("submit-number");
submit.addEventListener("focus", function(){submit.value="";});

let chance = document.getElementById("chance-number");
let result = document.getElementById("result-area"); 
let remain = document.getElementById("remain-chance")


function RN_maker () {
    random_number = Math.floor(Math.random()*100)+1;
    console.log("정답"+ random_number);    
}

function Start(){
    RN_maker();
    result.textContent = "Start ~ !!"
    user_chance=chance.value;
    remain.textContent = `Remain Chances : ${user_chance} `;
}

function Play(){
    let user_input = submit.value;

    //입력된 숫자 유효성 검사
    if(user_input>100 || user_input<1){
        result.textContent = "Please input range 1~100"
        return;
    }
    else if(history.includes(user_input)){
        result.textContent = "Already input number, please input another number"
        return;
    }

    //기회차감
    user_chance -- ;
    remain.textContent = `Remain Chances : ${user_chance} `;


    //게임 진행
    if(user_input>random_number){
        result.textContent = "Down ~ !!"
    }
    else if(user_input<random_number){
        result.textContent = "Up ~ !!"
    }
    else{
        result.textContent = "Correct :)"
        game_over=true;
    }

    if(user_chance<1){
        game_over = true;
        result.textContent = "Game Over :("
    }

    //히스토리
    history.push(user_input);    

    //게임 오버
    if(game_over==true){
        check.disabled = true
    }

}

//리셋
function Reset(){
    submit.value="";
    chance.value="";
    user_chance.value="";
    RN_maker();
    result.textContent = "Up or Down"
    remain.textContent = "Remain chance"
}
