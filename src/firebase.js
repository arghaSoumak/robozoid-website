import firebase from 'firebase'

var fhe5sdjdf5asdf5df4 = {
    apiKey: "AIzaSyDm35S2tFlxYSL2HP5GN0htgEUmxiDr2bM",
    authDomain: "robotics-dde2f.firebaseapp.com",
    databaseURL: "https://robotics-dde2f.firebaseio.com",
    projectId: "robotics-dde2f",
    storageBucket: "robotics-dde2f.appspot.com",
    messagingSenderId: "1015004874714"
};

firebase.initializeApp(fhe5sdjdf5asdf5df4);

const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export {
    db
}

