import './App.css';
import { TodoContainer } from './components/todoContainer/todoContainer';
import dotenv from 'dotenv';


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
  dotenv.config();
  console.log('HELLO');
  const env = process.env.NODE_ENV;
  console.log('ENV', env);

  return (
    <>
      <TodoContainer />
    </>
  );
}

export default App;
