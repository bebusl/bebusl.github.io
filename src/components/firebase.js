import firebase from "firebase/app";
import "firebase/database";

let database;
const firebaseConfig = {
  apiKey: "AIzaSyAmxNeX-u7tnUvsZSXu05XM1ClGmLX4ATU",
  authDomain: "mbti-cdfdd.firebaseapp.com",
  databaseURL: "https://mbti-cdfdd-default-rtdb.firebaseio.com",
  projectId: "mbti-cdfdd",
  messagingSenderId: "212405074444",
  appId: "1:212405074444:web:537767c363431211b34c29",
};

function init() {
  firebase.initializeApp(firebaseConfig);

  return firebase.database();
}

/*database
  .ref("visitor")
  .once("value")
  .then((snapshot) => console.log(snapshot.val()));*/
export function getDB() {
  database = init();
  return database.ref("visitor").once("value");
}

export function writeDB(visitor) {
  firebase.database().ref("visitor").set(visitor);
}
