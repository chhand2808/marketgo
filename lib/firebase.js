import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBpiOut0R84amx-Hz8Nh-uoeruAXBNkIHA",
  authDomain: "basiclogintoapp.firebaseapp.com",
  databaseURL: "https://basiclogintoapp-default-rtdb.firebaseio.com",
  projectId: "basiclogintoapp",
  storageBucket: "basiclogintoapp.appspot.com",
  messagingSenderId: "588108613584",
  appId: "1:588108613584:web:4144f7d2723b02955e9bd5",
  measurementId: "G-XH3TQVK5RH"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }