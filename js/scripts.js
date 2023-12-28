let slideIndex = 0;
carousel();

function carousel() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // 切換圖片的間隔時間
}

//手動切換圖片
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

const keys = document.querySelectorAll('.piano-key');

// 添加點擊事件或其他互動效果
keys.forEach(key => {
  key.addEventListener('click', () => {
    // 在這裡可以添加音樂播放或其他功能
    // 例如：播放對應音符的聲音
    // 可以使用 HTML5 的 Audio 元素或其他音樂播放 API
    // 這裡只是個範例，你可能需要加入更多的功能
    console.log('音符被點擊了');
  });
});
