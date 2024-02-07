var second = 0 ;
var minutes = 0 ;
var mili = 0 ;
var hour = 0 ;
var gethour = document.getElementById('hr')
var getsec = document.getElementById('sec')
var getmin = document.getElementById('min')
var getmili = document.getElementById('msec')
var roko ;

function start(){
      document.getElementById('start').style.backgroundColor = 'rgb(114, 114, 229)'
      setTimeout(() => {
            document.getElementById('start').style.backgroundColor = ''
      },1000);
      roko = setInterval(() => {
            mili++;
            getmili.innerHTML = mili
            if(mili>=100){
                  second++
                  getsec.innerHTML = second + " :"
                  mili = 0
            }
            else if(second>=60){
                  minutes++
                  getmin.innerHTML = minutes + " :"
                  second = 0
            }
            else if (minutes>=60){
                  hour++
                  gethour.innerHTML = hour + " :"
                  minutes = 0
            }
      }, 10);
      document.getElementById('start').disabled = true
      getmili.style.color = 'blue'
      getsec.style.color = 'blue'
      getmin.style.color = 'blue'
      gethour.style.color = 'blue'
}
function stop(){
      clearInterval(roko)
      document.getElementById('stop').style.backgroundColor = 'rgb(114, 114, 229)'
      setTimeout(() => {
            document.getElementById('stop').style.backgroundColor = ''
      }, 1000);
      document.getElementById('start').disabled = false

}
function reset(){
      setTimeout(() => {
            document.getElementById('reset').style.backgroundColor = ''
      }, 1000);
      document.getElementById('reset').style.backgroundColor = 'rgb(114, 114, 229)'
      var mili = 0  + " :";
      var second = 0 + " :";
var minutes = 0 + " :";
var hour = 0  + " :";
getmili.innerHTML = mili
getsec.innerHTML = second
getmin.innerHTML = minutes
gethour.innerHTML = hour
}