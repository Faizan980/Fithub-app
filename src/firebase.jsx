import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBYUaTP9RxoMHfmBIm80qq-rcDdURf4o2w",
    authDomain: "fithub-app-c6965.firebaseapp.com",
    projectId: "fithub-app-c6965",
    storageBucket: "fithub-app-c6965.appspot.com",
    messagingSenderId: "945333269340",
    appId: "1:945333269340:web:73cfca58b6b0f2324e0799",
    databaseURL: "https://fithub-app-c6965-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig);
  const database = getDatabase(app)