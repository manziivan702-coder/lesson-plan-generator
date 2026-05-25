import { app } from './firebase.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const auth = getAuth(app);

window.registerUser = function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert('Registration successful'))
    .catch(error => alert(error.message));
};

window.loginUser = function() {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(() => alert('Login successful'))
    .catch(error => alert(error.message));
};

window.continueGuest = function() {
  alert('Continuing as Guest');
};
