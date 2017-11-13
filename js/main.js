// select and store important selector into constant variable
document.addEventListener("DOMContentLoaded",function(){
  const body = document.querySelector('.light');
  const text = document.querySelector('.status');
  const lightSwitch = document.querySelector('.switch');

  // instruction
  window.addEventListener("load",function(){
    text.innerText = "Click the light switch";
  })

  lightSwitch.addEventListener('click', function(){

    // turn off
    if (lightSwitch.classList.contains('on')) {
      lightSwitch.classList.remove('on');
      lightSwitch.classList.add('off');
      body.style.backgroundColor = '#000';
      text.style.color = '#fff'
      text.innerText = "It's so dark in here!";
    } else {

      // turn on
      lightSwitch.classList.add('on');
      lightSwitch.classList.remove('off');
      body.style.backgroundColor = '#fff';
      text.style.color = '#000';
      text.innerText = "It's so bright in here!";
    }
  });

});
