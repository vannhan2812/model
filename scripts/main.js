const myHeading = document.querySelector('h2')
myHeading.textContent='Home - Hello , World of Pleasure'
var button = document.getElementById('clickBtn' )
var count = 0
var button = document.getElementById("clickBtn"),
  count = 0
button.onclick = function() {
  count += 1
  button.innerHTML = "You have jerked " + count + " times so far "
  if(count%10==0){
      alert(" i cumed !!!!")
  }
}

