document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');
    const signupToggle = document.getElementById('signup-toggle');
    const loginToggle = document.getElementById('login-toggle');
  
    signupToggle.addEventListener('click', () => {
      formContainer.classList.add('rotate-y-180');
    });
  
    loginToggle.addEventListener('click', () => {
      formContainer.classList.remove('rotate-y-180');
    });
  
    createParticles();
  });
  
  function createParticles() {
    const background = document.querySelector('.background');
    for (let i = 0; i < 50; i++) {
      const span = document.createElement('span');
      const size = Math.random() * 10 + 5;
      span.style.width = `${size}px`;
      span.style.height = `${size}px`;
      span.style.position = 'absolute';
      span.style.top = `${Math.random() * 100}%`;
      span.style.left = `${Math.random() * 100}%`;
      span.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      span.style.borderRadius = '50%';
      span.style.animation = `float ${Math.random() * 4 + 8}s ease-in-out ${Math.random() * 5}s infinite`;
      background.appendChild(span);
    }
  }
  