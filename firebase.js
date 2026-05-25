import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAOcjPpemioWwhBWHaJo0Ply8td4oQAfZA",
  authDomain: "fir-l-p.firebaseapp.com",
  projectId: "fir-l-p",
  storageBucket: "fir-l-p.firebasestorage.app",
  messagingSenderId: "1066515158255",
  appId: "1:1066515158255:web:f95b04c0aa5f53b360b71a",
  measurementId: "G-BHYNRD10VT"
};

const app = initializeApp(firebaseConfig);
export { app };
