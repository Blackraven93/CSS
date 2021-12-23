const box = document.querySelector('.box');
const inner = document.querySelector('.inner');

const handleConsole = () => {
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // 내가 보는 화면을 제외한 위의 높이
    const winScroll = document.documentElement.scrollTop // 실제 스크롤의 높이
    // 그래서 이말이 뭐냐??
    // 같아지면 100%
    // 뭐가?
    // 여기서 height는 내가 내려야하는 만큼 남은 공간
    // winScroll은 내가 스크롤을 내린만큼의 양
    // 즉 내릴 공간이 없다 === 남은 공간을 모두 채웠다
    // 따라서 나눴을 때 1이라면 100%다
    const scrolled = (winScroll / height) * 100;
    inner.style.height = scrolled + '%'
    console.log('scrollHeight: ' + document.documentElement.scrollHeight) // 스크롤할 수 있는 전체 높이
    console.log('clientHeight: ' + document.documentElement.clientHeight)
    console.log('window Scroll: '+ winScroll)
    console.log("scrollHeight - clientHeight (height): "+ height)
    console.log('percent: ' + scrolled)
}

document.addEventListener("wheel", handleConsole);


let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  // Do something with the scroll position
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // 내가 보는 화면을 제외한 위의 높이
    const winScroll = document.documentElement.scrollTop // 실제 스크롤의 높이
    const scrolled = (winScroll / height) * 100;
    inner.style.height = scrolled + '%' 
    console.log('scrollPos: '+ scrollPos)
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});