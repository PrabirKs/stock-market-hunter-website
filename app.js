const typingText = "Learn the art of trading from industry experts.";
    const typingEffectElement = document.getElementById("typing-effect");
    let index = 0;

    function typeWriter() {
      if (index < typingText.length) {
        typingEffectElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeWriter, 50); // Adjust typing speed here (lower value -> faster typing)
      }
    }

    typeWriter();

    function adjustFontSize() {
        const typingEffectElement = document.getElementById("typing-effect");
        const windowWidth = window.innerWidth;
        const fontSize = windowWidth <= 767 ? 14 : 24; // Adjust font size based on the window width
        typingEffectElement.style.fontSize = `${fontSize}px`;
      }
  
      // Call the adjustFontSize function on page load
      adjustFontSize();
  
      // Add event listener to resize the text when the window is resized
      window.addEventListener('resize', adjustFontSize);


       // JavaScript to handle form submission
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create a new FormData object to store the form data
    const formData = new FormData(contactForm);

    // Send a POST request to the server-side script using Fetch API
    fetch("send_email.php",
     {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => {
        if (data === "success") {
          alert("Message sent successfully!");
          contactForm.reset();
        } else {
        //   alert("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  });