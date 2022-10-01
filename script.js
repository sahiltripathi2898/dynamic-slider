const sliderEle = document.getElementById('slider')
sliderEle.addEventListener('input', function(event) {
  const value = event.target.value
  const rootEle = document.querySelector(':root')
  rootEle.style.setProperty('--percentage', `${value}%`);
})