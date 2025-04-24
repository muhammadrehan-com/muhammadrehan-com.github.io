window.addEventListener('load', function () {
    setTimeout(function () {
      gsap.to("#preloader", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: function () {
          document.getElementById("preloader").style.display = "none";
        }
      });
    }, 1000); // 4 seconds delay
  });