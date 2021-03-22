import firebase from "firebase";

var config = {
  apiKey: "AIzaSyCNrN4WxLSLDxe58E0NzPWDgo0cpzBO_4I",
  authDomain: "election-2021-58742.firebaseapp.com",
  databaseURL: "https://election-2021-58742-default-rtdb.firebaseio.com",
  storageBucket: "election-2021-58742.appspot.com",
  projectId: "election-2021-58742",
  messagingSednderId: "242502191640",
};
firebase.initializeApp(config);
const db = firebase.firestore();
export const database = firebase.database();
export default db;
