import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCJuGguUCAN3OiI7I26VFjx3c_Hms1w6yA",
    authDomain: "reactbase-blog-app.firebaseapp.com",
    projectId: "reactbase-blog-app",
    storageBucket: "reactbase-blog-app.appspot.com",
    messagingSenderId: "884765013138",
    appId: "1:884765013138:web:88aeb25b32c0b7f9b7a24b"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export {auth,db,storage};