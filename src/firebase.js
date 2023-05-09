import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9zarVXvcLifxDoluUUyWKLbjmFdCqgZU",
//   authDomain: "chat-4cc60.firebaseapp.com",
//   projectId: "chat-4cc60",
//   storageBucket: "chat-4cc60.appspot.com",
//   messagingSenderId: "185956378472",
//   appId: "1:185956378472:web:5aaef218b1a211828b58dd",
//   measurementId: "G-J2EH02L6X3",
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyARV807t-e4f8y-pnJ_RGAECaShSIi5DKk",
//   authDomain: "chat-application-27f8f.firebaseapp.com",
//   projectId: "chat-application-27f8f",
//   storageBucket: "chat-application-27f8f.appspot.com",
//   messagingSenderId: "517392085904",
//   appId: "1:517392085904:web:08ba2dee0323e741413915",
//   measurementId: "G-F4VX976MEG",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDTR9BiHjoxLeFlhisQj2Y8e2lkVX2SeM0",
  authDomain: "chat-app-83b27.firebaseapp.com",
  projectId: "chat-app-83b27",
  storageBucket: "chat-app-83b27.appspot.com",
  messagingSenderId: "189881563551",
  appId: "1:189881563551:web:103c78180ad770c197a5aa",
  measurementId: "G-GCN3WSG9LD",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
