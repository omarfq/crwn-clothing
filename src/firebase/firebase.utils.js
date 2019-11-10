import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDYmYhGYsiYFSzUlG10BRDK5TzgdAsgfGU',
    authDomain: 'crown-db-4d32a.firebaseapp.com',
    databaseURL: 'https://crown-db-4d32a.firebaseio.com',
    projectId: 'crown-db-4d32a',
    storageBucket: 'crown-db-4d32a.appspot.com',
    messagingSenderId: '773292472013',
    appId: '1:773292472013:web:97c83b50949af100485b84'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
