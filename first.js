let turn="O";
let total_turn=0;

const winner=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const board_arr=new Array(9).fill("E");

function checkwinner(){
    for(let [index0,index1,index2] of winner){
        if(board_arr[index0]!="E"&&board_arr[index0]==board_arr[index1]&&board_arr[index1]==board_arr[index2])
            return 1;
    }
    return 0;
}

const game=(event)=>{
    const element=event.target;
    // if board box is empty
    if(board_arr[element.id]=="E"){
        total_turn++
        if(turn=="O"){
            document.getElementById("pic1").style.transform="scale(1.1)";
            document.getElementById("pic").style.transform="scale(1)"
            element.innerHTML="O";
            board_arr[element.id]="O";
            if(checkwinner()){
                document.getElementById("message").textContent="Player O wins";
                board.removeEventListener("click",game);
                document.getElementById("pic").style.transform = "scale(1)";
                document.getElementById("pic1").style.transform = "scale(1)";
                return;
            }
            turn="X";
        }
        else{
            document.getElementById("pic").style.transform="scale(1.1)"
            document.getElementById("pic1").style.transform="scale(1)"
            
            element.innerHTML=`<p style="color: red">X</P>`;
            board_arr[element.id]="X";
            if(checkwinner()){
                document.getElementById("message").textContent="Player X wins";
                board.removeEventListener("click",game);
                document.getElementById("pic").style.transform = "scale(1)";
                document.getElementById("pic1").style.transform = "scale(1)";
                return;
            }
            turn="O";
        }
        if(total_turn==9){
            document.getElementById("message").textContent="Match Draw!!";
            // board.addEventListener("click",game);
        }
    }
};

const board=document.querySelector(".board");
board.addEventListener("click",game);

//restart game by button
document.getElementById("restart").addEventListener("click",()=>{
    for(let i=0;i<9;i++){
        board_arr[i]="E";
        document.getElementById(i).textContent="";
    }
    document.getElementById("message").textContent="";
    document.getElementById("pic").style.transform = "scale(1)";
    document.getElementById("pic1").style.transform = "scale(1)";
    turn="O";
    total_turn=0;
    board.addEventListener("click",game);
});

