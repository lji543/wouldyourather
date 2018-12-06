import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDAHEPep2Phc7OVdtsFqUwxGrvgpOCF6qI",
  authDomain: "wouldyourather-ff.firebaseapp.com",
  databaseURL: "https://wouldyourather-ff.firebaseio.com",
  projectId: "wouldyourather-ff",
  storageBucket: "wouldyourather-ff.appspot.com",
  messagingSenderId: "853209847755"
};
const fire = firebase.initializeApp(config);
export default fire;
