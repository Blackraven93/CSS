const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    
  
  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  console.log(`elementOutofView : ${elementTop}`)
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

// 애니매이션이 나오게 (fade-in, fade-out)
const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

// 애니매이션을 가지고 오는 블록들
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 2)) { // 화면 절반이 넘을 때 class를 추가하여 보여준다.
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el) // 화면을 넘었다면 다시 사라지게 한다.
    } else {
        hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});