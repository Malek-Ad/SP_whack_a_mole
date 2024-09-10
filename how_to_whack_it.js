var Score=0
var time=0
var sound = new Audio('./Sound effect/whack-a-mole-178509.mp3');
sound.preload = 'auto';
var bonk= new Audio('./Sound effect/metallic-clang-100473.mp3')
bonk.preload= 'auto'
var bomb= new Audio('./Sound effect/big-boom-202678.mp3')
bomb.preload= 'auto'
$('#start').on('click', function () {
    time=31
    Score=0
    $('#score').text('Score: '+ Score)
    start()
    playSound()
})
function start() {
var stop=setInterval(function () {
    mole()
},1300)
function random() {
    return Math.floor(Math.random()*9+1)
}
function bomb() {
    var bpos=random()
    $(`.grid-item`).empty()
        $(`#${bpos}`).append(`<img id='bomb${bpos}' src='./Images/bomb.png'>`)
        $(`#bomb${bpos}`).click(function () {
      playBombSound()
      setTimeout(function () {
        alert('You lost !!')
        Score = 0
        time = 0
        $(`.grid-item`).empty()
        clearInterval(over)
        clearInterval(stop)
        clearInterval(stpbomb)
    }, 100)
})
}
var stpbomb=setInterval(bomb,6000)
function mole() {
    var pos=random()
    $(`.grid-item`).empty()
    $(`#${pos}`).append(`<img id='mole${pos}' src='./Images/mole2.png'>`)
    
$(`#mole${pos}`).click(function () {
    $(`#mole${pos}`).attr('src',"./Images/moleHit.png")
    Score+=10
    $('#score').text('Score: '+ Score)
  playBonkSound()
}) }
    var  over=setInterval(function () {
      time--
      $('#clock').text('Timer: '+time)
      if (time===0) {
          clearInterval(over)
          clearInterval(stop)
          clearInterval(stpbomb)
          alert ('Time is up !'+'\n'+'Your score is: '+Score)
      }
  },1000)
  $('#stop').on('click',function () {

        alert ('Game over !'+'\n'+'Your score is: '+Score)
        Score=0
        time=0
        $(`.grid-item`).empty()
        clearInterval(over)
        clearInterval(stop)
        clearInterval(stpbomb)
 }) }
function playBonkSound() {
    bonk.play()
    bonk.volume=0.5
}
   function playSound() {
    sound.play()
    sound.volume=0.1
}
function playBombSound() {
    bomb.play()
    bomb.volume=1
}





