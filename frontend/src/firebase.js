// Import the functions  need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA0hK8Qgkt3oD21KpElpYifZzgoX2Kht20",
  authDomain: "ineuronhackathon-a5447.firebaseapp.com",
  projectId: "ineuronhackathon-a5447",
  storageBucket: "ineuronhackathon-a5447.appspot.com",
  messagingSenderId: "725566685478",
  appId: "1:725566685478:web:fa83955d0057fdaff241e7",
  measurementId: "G-14K3CVLJ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
