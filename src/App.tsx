import './App.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTNrQIJe0Q2-OsvqeskacQ6bYJfcDCvR0",
  authDomain: "todo-list-82592.firebaseapp.com",
  projectId: "todo-list-82592",
  storageBucket: "todo-list-82592.appspot.com",
  messagingSenderId: "597007571250",
  appId: "1:597007571250:web:129d32bf17d9e3ccff1f2b",
  measurementId: "G-LT6LHE7WTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <>
      <h1>
        Todo-list
      </h1>
    </>
  )
}

export default App
