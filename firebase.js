// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoyJC8B0ruQV8VSh7_QW8gXJj0ptNcJOg",
  authDomain: "uber-clone-2ec59.firebaseapp.com",
  databaseURL: "https://uber-clone-2ec59-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "uber-clone-2ec59",
  storageBucket: "uber-clone-2ec59.appspot.com",
  messagingSenderId: "203611133306",
  appId: "1:203611133306:web:892a58d884be5e19cff2c3",
  measurementId: "G-0HPRCV2D49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig);


// Use Firebase Auth for user authentication
const auth = firebase.auth();

// Sign up a new user
auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("New user created:", user);
  })
  .catch((error) => {
    console.error("Error creating user:", error);
  });

// Log in an existing user
auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    console.log("User logged in:", user);
  })
  .catch((error) => {
    console.error("Error logging in user:", error);
  });

// Log out the current user
auth.signOut()
  .then(() => {
    console.log("User logged out.");
  })
  .catch((error) => {
    console.error("Error logging out user:", error);
  });