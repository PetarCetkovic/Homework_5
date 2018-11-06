var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var x = document.getElementById("X")
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("slideWrap");
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function() {
      sliderWidth = slider.offsetWidth;
    });
  
    var prevSlide = function() {
      if(count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };
  
    var nextSlide = function() {
      if(count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
      else if(count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };
    document.onkeydown = function(e){
      if (e.key === "ArrowLeft"){
        prevSlide();
      }
      else if (e.key === "ArrowRight"){
        nextSlide();
      }
    }
    next.addEventListener("click", function() {
      nextSlide();
    });
  
    prev.addEventListener("click", function() {
      prevSlide();
    });
    
    setInterval(function() {
      nextSlide()
    }, 8000);
  
    slideList.addEventListener("click", function(){
        slider.style.width="90vw";
        slider.style.height="90vh";
        x.style.display="block";
    });
    x.addEventListener("click", function(){
      slider.style.width="60%";
      slider.style.height="500px";
      x.style.display="none";
  });
};

window.onload = function() {
responsiveSlider();  
}
