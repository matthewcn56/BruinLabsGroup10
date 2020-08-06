import ApiKeys from "./constants/ApiKeys.js";
import * as firebase from "firebase";
let db = firebase.firestore();
export function initializeFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig);
  }

  require("firebase/firestore");
}
export function setProfile(result) {
  db.collection("users").doc(result.user.uid).set({
    uid: result.user.uid,
    gmail: result.user.email,
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    displayName: result.user.displayName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoggedIn: firebase.firestore.FieldValue.serverTimestamp(),
  });
  if (result.user.photoUrl != null)
    db.collection("users").doc(result.user.uid).update({
      profilePic: result.user.photoUrl,
    });
}

export function signOut() {
  firebase.auth().signOut();
}
