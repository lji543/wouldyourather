import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAGxHzn7GRUjigQ-b4eeCbkWp1Yq1alg-k",
  authDomain: "wouldyourather-6362c.firebaseapp.com",
  databaseURL: "https://wouldyourather-6362c.firebaseio.com",
  projectId: "wouldyourather-6362c",
  storageBucket: "wouldyourather-6362c.appspot.com",
  messagingSenderId: "1002586172129"
};
const fire = firebase.initializeApp(config);
export default fire;
