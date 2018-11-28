import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDm35S2tFlxYSL2HP5GN0htgEUmxiDr2bM",
    authDomain: "robotics-dde2f.firebaseapp.com",
    databaseURL: "https://robotics-dde2f.firebaseio.com",
    projectId: "robotics-dde2f",
    storageBucket: "robotics-dde2f.appspot.com",
    messagingSenderId: "1015004874714"
};

firebase.initializeApp(config);

const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export {
    db
}

