var runner = document.getElementById('runner');
var score = document.getElementById('sc_board');
var rock= document.getElementById('rock1');
var i = 0;
score.innerHTML = i;

setInterval(() => {
    
    document.addEventListener('keypress', () => {
        console.log('hi!');
        if (!runner.classList.contains('jump')) {
            runner.classList.add('jump');
            setTimeout(() => {
                runner.classList.remove('jump');
            }, 500);
        }
        
    });
    var chk_runner=parseFloat(window.getComputedStyle(runner).getPropertyValue('top'));
    var chk_rock=parseFloat(window.getComputedStyle(rock).getPropertyValue('left'));
    if((chk_rock<parseFloat((window.innerWidth/100)*30) && chk_rock>parseFloat((window.innerWidth/100)*20)) && chk_runner>parseFloat((window.innerHeight/100)*45))
    {alert(`Your Score is ${i} \n Play Again!! `);
    location.reload();
    }
// && chk_runner>parseFloat((window.innerHeight/100)*40)
    // console.log(chk_runner);
    
}, 50);
setInterval(()=>{
        i += 1; score.innerHTML = i;
    },500);