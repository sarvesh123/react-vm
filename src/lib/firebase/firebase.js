import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBgecMikzTabOOsdvP7RQzREmTDNOkmjHE",
    authDomain: "react-vm.firebaseapp.com",
    databaseURL: "https://react-vm.firebaseio.com",
    projectId: "react-vm",
    storageBucket: "",
    messagingSenderId: "881199988307"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const firebaseAuth = firebase.auth();
const firebaseDatabase = firebase.database();

export {
    firebaseAuth
}

export default firebaseDatabase;