let humanscore=0;
let compscore=0;
const choice=document.querySelectorAll('.choice');
const humanScore=document.querySelector('#humanScore');
const compScore=document.querySelector('#compScore');

const msg=document.querySelector('#msg')
choice.forEach((i)=>{
    i.addEventListener('click',(e)=>{
        let compChoice=Math.floor(Math.random()*3);
       if (e.target.id==='rock') {
          if (compChoice===0) {
            draw();
          }
          else if (compChoice===1) {
            lose('Rock','Paper');
          }
          else{
            win('Rock','Scissor');
          }
       }
       else if (e.target.id==='paper') {
          if (compChoice===0) {
            win('Paper','Rock');
          }
          else if (compChoice===1) {
            draw();
          }
          else{
            lose('Paper','Scissor');
          }
       }
       else if (e.target.id==='scissor') {
        if (compChoice===0) {
            lose('Scissor','Rock');
        }
        else if (compChoice===1) {
            win('Scissor','Paper');
        }
        else{
            draw();
        }
       }
    })
})
function draw() {
    msg.innerHTML='Draw';
    msg.style.backgroundColor='aqua';
    msg.style.color='black'
}
function lose(x,y) {
    compscore++;
    msg.innerHTML=`You Loose.${y} beats your ${x}`;
    msg.style.backgroundColor='red'
    msg.style.color='white'
    compScore.innerHTML=compscore;

}
function win(x,y) {
    humanscore++;
    msg.innerHTML=`You Win! your ${x} beats ${y}`;
    msg.style.backgroundColor='green';
    msg.style.color='white';
    humanScore.innerHTML=humanscore;
}

