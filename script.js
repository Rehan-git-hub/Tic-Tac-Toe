window.addEventListener("DOMContentLoaded",()=>{
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("#reset");
    let turn0 = true;
    let message = document.querySelector(".message");
    let newGame = document.querySelector(".newgame");
    let messageBox = document.querySelector(".message-box");
    let clickcounter = 0;
    const winning=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");
            clickcounter++;
            if(turn0) {
                box.classList.add("ocolor");
                box.innerText = "O";
                turn0 = false;
            }else{
                box.classList.add("xcolor");
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true ;
            checkWinner();
        });
    });
    const showWinner = (winner) => {
        message.innerText = `Winner is ${winner}`
        messageBox.classList.remove("hide");
        clickcounter=0;
    }
    const showDraw = () => {
        message.innerText = `The match was a draw`
        messageBox.classList.remove("hide");
        clickcounter=0;
    }

    const checkWinner = () => {
        for(let pattern of winning){
            // console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText , boxes[pattern[2]].innerText);
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1===pos2 && pos2===pos3){
                    for(box of boxes){
                        box.disabled = true;
                    }
                    showWinner(pos1);
                }
                else if(clickcounter>=9){
                    showDraw();
                }
            }
        }
    };
    const resetgame = () => {
        turn0 = true;
        enableBoxes();
        messageBox.classList.add("hide");
    }
    const enableBoxes = () => {
        for(box of boxes){
            box.disabled = false;
            box.innerText= "";
        }
    }
    newGame.addEventListener("click", resetgame);
    resetbtn.addEventListener("click", resetgame);
})