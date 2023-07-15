import './App.css';
import { TodoContainer } from './components/todoContainer/todoContainer';
console.log(import.meta.env.VITE_NODE_ENV, '=========================');
console.log(import.meta.env.VITE_FIREBASE_APP_ID, '=========================');
console.log(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, '=========================');
console.log(import.meta.env.VITE_FIREBASE_PROJECT_ID, '=========================');
console.log(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET, '=========================');

console.log(import.meta.env.FIREBASE_APP_ID, '-----------------');
console.log(import.meta.env.FIREBASE_MEASUREMENT_ID, '-----------------');
console.log(import.meta.env.FIREBASE_PROJECT_ID, '-----------------');
console.log(import.meta.env.FIREBASE_STORAGE_BUCKET, '-----------------');


console.log(import.meta.env.PROD, '-----------------');
console.log(import.meta.env.BASE_URL, '-----------------');
console.log(import.meta.env.MODE, '-----------------');
console.log(import.meta.env.SSR, '-----------------');
console.log(import.meta.env.DEV, '-----------------');




// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {

// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {

  return (
    <>
      <TodoContainer />
    </>
  );
}

export default App;
