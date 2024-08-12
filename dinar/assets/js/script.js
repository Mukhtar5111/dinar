// Automated Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Sticky Chat Icon Toggle
document.querySelector('.chat-icon').addEventListener('click', toggleChatOptions);

function toggleChatOptions() {
    const chatOptions = document.querySelector('.chat-options');
    chatOptions.style.display = chatOptions.style.display === "block" ? "none" : "block";
}

// Form Submission Handling (Optional)
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us!');
    this.reset(); // Reset form after submission
});
