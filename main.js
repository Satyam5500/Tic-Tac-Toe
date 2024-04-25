let boxes =document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg")
let turnO =true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=> {
    turn0 =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turnO){
        box.innerText="0";
        turnO =false;
    }else{
        box.innerText="X";
        turnO = true;
    }
    box.disabled =true;

    checkWinner();
});
});
const disableBoxes =() => {
    for(let box of boxes){
        box.disabled =true;

    }

};
const enableBoxes =() =>{
    for(let box of boxes){
        box.disabled =false;
        box.innerText="";
    }
};
const showWinner =(winner) =>{
    msg.innerText ='Congratulations, Winner is ${winner}';
    msgContainer.classList.remove("hide");
    disableBoxes();
    }


const checkWinner= () =>{
    for(pattern of winPatterns){
       
                let pos1Val=boxes[pattern[0]].innerText;
                let pos2Val=boxes[pattern[1]].innerText;
                let pos3Val=boxes[pattern[2]].innerText;

                if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
                    if(pos1Val === pos2Val && pos2Val === pos3Val){
                        console.log("winner",pos1Val);
                        showWinner();

                    }
                }
                }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
function setMouseEvent(){
    function glassEffect(e){
        const circle= document.querySelector(".circle");
        const x=e.clientX;
        const y=e.clientY;
        circle.computedStyleMap.transform='translateX(${x}px)translateY(${x}px)';
    }
    const Container=document.querySelector(".container");
    Container.addEventListener("mousemove",glassEffect);

}
setMouseEvent();
document.addEventListener('mousemove', function(e) {
    let fireCursor = document.querySelector('.fire-cursor');
    fireCursor.style.left = e.clientX + 'px';
    fireCursor.style.top = e.clientY + 'px';
  });
  