import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyANeZdJs6krPv8nw2B2OfpSGexjyKcFUZA",
    authDomain: "cooking-ninja-site-6dd5c.firebaseapp.com",
    projectId: "cooking-ninja-site-6dd5c",
    storageBucket: "cooking-ninja-site-6dd5c.appspot.com",
    messagingSenderId: "919908659569",
    appId: "1:919908659569:web:c8c3f01bf042bea96146d0"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore()

export { projectFirestore }