import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyADwo3M7r5ysE1Xg4jzNYRC1VE8Oo7NKfI",
    authDomain: "musicland-9ce93.firebaseapp.com",
    projectId: "musicland-9ce93",
    storageBucket: "musicland-9ce93.appspot.com",
    messagingSenderId: "977011533790",
    appId: "1:977011533790:web:aa69d6bbbc7ccc68299f4f"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}