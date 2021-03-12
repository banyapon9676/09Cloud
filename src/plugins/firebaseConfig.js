import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
    const firebaseConfig = {
        apiKey: "AIzaSyDzEjiy_QE8d8PB8Lvyk3gG2Kyo_4FWRvk",
        authDomain: "hotel-f8d66.firebaseapp.com",
        projectId: "hotel-f8d66",
        storageBucket: "hotel-f8d66.appspot.com",
        messagingSenderId: "539232926597",
        appId: "1:539232926597:web:c278f5177c7de6a8c322ec",
        measurementId: "G-ZB4K7HKH75"
    }
    firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()