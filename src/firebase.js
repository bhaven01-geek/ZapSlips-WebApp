import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

// Initialize Firebase
const app = firebase.initializeApp({
    
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,  
  // measurementId:process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  apiKey: "AIzaSyCwRpRLRYwfPt2CAIFGRff2DoJ2Hb-wPyk",
  authDomain: "payslipdemo-95d90.firebaseapp.com",
  projectId: "payslipdemo-95d90",
  storageBucket: "payslipdemo-95d90.appspot.com",
  messagingSenderId: "578761325650",
  appId: "1:578761325650:web:e2a3884e601c96b583738b",
  measurementId: "G-WZDXR1X5W7"
});

// Export auth will be used for authentication
export const auth = app.auth();

// For Google, Facebook Login
const provider = new firebase.auth.GoogleAuthProvider();
const Fbprovider = new firebase.auth.FacebookAuthProvider();

// Firebase Storage for storing user data Like Company Logo
const storage = firebase.storage();

export { storage, provider, firebase , Fbprovider };
export default app;
