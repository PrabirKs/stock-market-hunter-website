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
        const fontSize = windowWidth <= 767 ? 16 : 24; // Adjust font size based on the window width
        typingEffectElement.style.fontSize = `${fontSize}px`;
      }
  
      // Call the adjustFontSize function on page load
      adjustFontSize();
  
      // Add event listener to resize the text when the window is resized
      window.addEventListener('resize', adjustFontSize);