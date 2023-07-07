const btn1=document.querySelector("#btn1")
const btn2=document.querySelector("#btn2")
const btn3=document.querySelector("#btn3")
const s1=document.querySelector("#s1")
const s2=document.querySelector("#s2")
const winningTarget=document.querySelector("#playto")
let p1Score=0;
let p2Score=0;
let winningScore=3;
let isGameOver=false;

btn1.addEventListener('click',function(){
    if(!isGameOver)
    {
    p1Score+=1;
   
    if(p1Score===winningScore)
    {   isGameOver=true
        //s1.style.color='cyan';
        s1.classList.add('winner')
        s2.classList.add('losser')
        btn1.disabled=true;
        btn2.disabled=true;
    }
    s1.textContent=p1Score

       
    
}
})
btn2.addEventListener('click',function(){
    if(!isGameOver)
    {
    p2Score+=1;
   
    if(p2Score===winningScore)
    {   isGameOver=true
        //s2.style.color='cyan';
         s1.classList.add('winner')
        s2.classList.add('loser')
        btn1.disabled=true;
        btn2.disabled=true;
    }
    }
    s2.textContent=p2Score

        
    
}
)
// btn2.addEventListener('click',function(){
//     p2Score+=1;
//     s2.textContent=p2Score
// })
btn3.addEventListener('click',reset)

function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
   s1.textContent=0;
   s2.textContent=0;
   s1.classList.remove('winner','losser')
   s2.classList.remove('winner','losser')
   btn1.disabled=false;
        btn2.disabled=false;
    
}
winningTarget.addEventListener("change",function()
{
    winningScore=parseInt(this.value)
    reset();
})