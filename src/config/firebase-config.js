import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJnRfGVlOZKA4ZI4_xFR_HVVNsR6lnVBA",
  authDomain: "jsr-914-final-project.firebaseapp.com",
  projectId: "jsr-914-final-project",
  storageBucket: "jsr-914-final-project.appspot.com",
  messagingSenderId: "240040456384",
  appId: "1:240040456384:web:d2646411ba96e6b0a53d25",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
