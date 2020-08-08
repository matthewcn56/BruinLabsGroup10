import ApiKeys from "./constants/ApiKeys.js";
import * as firebase from "firebase";
import "firebase/firestore";

firebase.initializeApp(ApiKeys.FirebaseConfig);
console.log("started app");
let db = firebase.firestore();

export async function setProfile(result) {
  db.collection("users").doc(result.user.uid).set({
    uid: result.user.uid,
    gmail: result.user.email,
    profilePic:
      "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png",
    displayName: result.user.displayName,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    lastLoggedIn: firebase.firestore.FieldValue.serverTimestamp(),
  });
  console.log((await db.collection("users").doc(result.user.uid).get()).data());
  if (result.user.photoUrl != null)
    db.collection("users").doc(result.user.uid).update({
      profilePic: result.user.photoUrl,
    });
}

export function signOut() {
  firebase.auth().signOut();
}
