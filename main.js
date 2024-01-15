let Boxes=document.querySelectorAll(".Box");
let MassageConatiner=document.querySelector(".msg-container");
let ResetButton=document.querySelector("#ResetBtn");
let newGameButton=document.querySelector("#NewBtn");
let Massage=document.querySelector("#msg");

//let turnO= true;
let turnX= true;


 const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
 ];

 const resetGame =( ) => {
 // turnO =true;
  turnX=true;
  enabledbox();
  MassageConatiner.classList.add ("hide");
 };
Boxes.forEach((Box) => {
     Box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnX){
            Box.innerText="X";
            turnX=false;
        }else {
            Box.innerText="O";
            turnX=true;
        }
      Box.disabled= true; 
      chechwinner();
       
    });
});

const disabledbox = ()  => {
  for (let box of Boxes){
    box.disabled = true;
  }
};

const enabledbox = ()  => {
  for (let box of Boxes){
    box.disabled = false;
    box.innerText = "";
  }
};



const showWinner = (winner)  =>{
Massage.innerText=`congartulation ,winner is ${winner}`;
MassageConatiner.classList.remove ("hide");
disabledbox();
};


const chechwinner =()  =>{
  for ( let pattern of winPatterns) {
      let pos1value = Boxes[pattern[0]].innerText;
      let pos2value = Boxes[pattern[1]].innerText;
      let pos3value = Boxes[pattern[2]].innerText;

      if(pos1value != "" && pos2value != ""&& pos3value != ""){
        if(pos1value===pos2value && pos2value===pos3value){
          console.log("winner",pos1value);
          showWinner(pos1value);
        };
      };
  };
};  

newGameButton.addEventListener("click",resetGame);
ResetButton.addEventListener("click",resetGame);
