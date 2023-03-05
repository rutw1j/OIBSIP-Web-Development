// functions for slider
var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
	if (n < 1) {
        slideIndex = slides.length;
    }
	
    for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace("mySlides active", "mySlides");
	}
	
    for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	}

    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].className += " active"
    dots[slideIndex-1].className += " active";
}

window.onload = function() {

    // function for addletter text animation
    function addLetter(target_element, target_text, index) {
        if (index <= target_text.length-1) {
            target_element.innerHTML += target_text[index];
            setTimeout(function() {addLetter(target_element, target_text, index + 1);}, 40);
        }
    }
  
    function retrieveAndClearText(target_element) {
      let target_text = target_element.innerHTML;
      target_element.innerHTML = "";
      return target_text;
    }
  
    const customText1 = document.getElementById("custom-text-1");
    let text1 = retrieveAndClearText(customText1);
    setTimeout(function() {
        addLetter(customText1, text1, 0);
    }, 200);
  
    const customText2 = document.getElementById("custom-text-2");
    let text2 = retrieveAndClearText(customText2);
    setTimeout(function() {
        addLetter(customText2, text2, 0);
    }, 200);

	showSlides(slideIndex);

    // intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("sp-show");
            }
            /* comment this to enable repeated animations*/
            else {
                entry.target.classList.remove("sp-show");
            }
            
        });
    })
    const hiddenElements = document.querySelectorAll(".sp-hidden");
    hiddenElements.forEach((el) => observer.observe(el));
};