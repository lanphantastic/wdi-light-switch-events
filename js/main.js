
document.addEventListener("DOMContentLoaded",function(){
  const body = document.querySelector('.light');
  const text = document.querySelector('.status');
  const lightSwitch = document.querySelector('.switch');

  window.addEventListener("load",function(){
    text.innerText = "Click the light switch";
  })
});
