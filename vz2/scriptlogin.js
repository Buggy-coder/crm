// document.addEventListener('DOMContentLoaded', function() {
//     const loginForm = document.getElementById('loginForm');
//     const signupForm = document.getElementById('signupForm');
  
//     loginForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const username = document.getElementById('loginUsername').value;
//       const password = document.getElementById('loginPassword').value;
  

//       alert(`Login successful! Welcome, ${username}`);
//       this.reset(); 
//     });
  
//     signupForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const newUsername = document.getElementById('signupUsername').value;
//       const newPassword = document.getElementById('signupPassword').value;
  

//       alert(`Signup successful! New user: ${newUsername}`);
//       this.reset(); 
//     });
//   });
  

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    const backToLoginLink = document.querySelector('.login-link a');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const password = document.getElementById('loginPassword').value;
  

      console.log('Username:', username);
      console.log('Password:', password);
  

      alert(`Login successful! Welcome, ${username}`);
      this.reset(); 
    });
  
    signupForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newUsername = document.getElementById('signupUsername').value;
      const newPassword = document.getElementById('signupPassword').value;

      console.log('New Username:', newUsername);
      console.log('New Password:', newPassword);
  

      alert(`Signup successful! New user: ${newUsername}`);
      this.reset(); 
    });
  
  
    forgotPasswordLink.addEventListener('click', function(event) {
      event.preventDefault();
      console.log('Redirecting to password reset page...');
    });
  

    backToLoginLink.addEventListener('click', function(event) {
      event.preventDefault();

      console.log('Redirecting to login page...');
    });
  });
  