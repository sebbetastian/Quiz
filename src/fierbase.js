import { initializeApp } from "firebase/app";
import {getDatabase, ref, set} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDuKD6Dd7FIL7MiPz1iqRNfzvQNljFGvg0",
    authDomain: "test-541e5.firebaseapp.com",
    databaseURL: "https://test-541e5-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "test-541e5",
    storageBucket: "test-541e5.appspot.com",
    messagingSenderId: "509696045552",
    appId: "1:509696045552:web:820b8a7e2786221302ed35"
  };

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    

    return result;
}
  
  const app = initializeApp(firebaseConfig);
  
  const database = getDatabase(app)

  export function writeUserData(result, random) {
    const db = getDatabase();
    set(ref(db, 'Quiz data/' + random), {
      result : result
    });
  }


