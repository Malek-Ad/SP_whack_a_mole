var Score=0
var time=0

function mole() {
    var pos=Math.floor(Math.random()*9+1)
    $(`.grid-item`).empty()
    $(`#${pos}`).append(`<img id='mole${pos}' src='./Images/mole2.png'>`)
    function score() {
        return Score+=10
    }
$(`#mole${pos}`).click(function () {
    $(`#mole${pos}`).attr('src',"./Images/moleHit.png")
    Score+=10
    $('#score').text('Score: '+ Score)
})  
    }
  
    $('#start').on('click', function () {
        time=60
        Score=0
        $('#score').text('Score: '+ Score)
        start()
    })

   function start() {
    var stop=setInterval(function () {
        mole()
    },1300)

    var  over=setInterval(function () {
      time--
      $('#clock').text('Timer: '+time)
      if (time===0) {
          clearInterval(over)
          clearInterval(stop)
          alert ('Time is up !'+'\n'+'Your score is: '+Score)
      }
  },1000)
  $('#stop').on('click',function () {
    if (time>0 ) {
        alert ('Game over !'+'\n'+'Your score is: '+Score)
        Score=0
        time=0
        $(`.grid-item`).empty()
        clearInterval(over)
        clearInterval(stop)
    }
 })
   }





