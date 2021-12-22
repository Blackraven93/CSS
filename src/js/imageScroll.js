
const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

// 이미지를 for문으로 전부 가져와 미리 캐시에 저장
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

// 이미지를 처음에 로드해서 그려줌
const img = new Image()
img.onload=function(){
    context.drawImage(img, 0, 0);
}
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;

// https://stackoverflow.com/questions/3971931/does-new-image-allow-for-use-of-cache-javascript
const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

// 스크롤했을 때 위치 잡기
window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  // 리 페인트가 진행되기 전에 업데이트 하는 함수
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

//끝까지 스크롤 했음 element.scrollHeight - element.scrollTop === element.clientHeight

preloadImages()

