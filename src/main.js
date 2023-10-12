
const observerFade = new IntersectionObserver(entries => {
  let i = 1;
  entries.forEach(entry => {
    const fade = entry.target;
    if (entry.isIntersecting) {
      fade.style.transform="translateY(0)";
      fade.style.transitionDuration='1s'
      fade.style.transitionDelay=i*0.5+"s"
      fade.style.opacity="1";
      observerFade.unobserve(fade)

    }
    i++;
  });
  return; 
});

document.querySelectorAll(".fade").forEach(fade => {
  observerFade.observe(fade);
});

const observerCounter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const counter = entry.target;
    let number = counter.getAttribute('data-attribute');
    if (entry.isIntersecting) {
      let i = 0;
      const speed = 200;
      const updateCount =()=>{
        if(i < number){
          counter.innerHTML=++i;
          setTimeout(()=>{
            updateCount()
          },number/speed)
        }
      }
      updateCount()

      observerCounter.unobserve(counter)

    }
  });
  return; 
});

document.querySelectorAll(".counter").forEach(counter => {
  observerCounter.observe(counter);
});