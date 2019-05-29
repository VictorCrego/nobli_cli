    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCSPzfPdAjl4kGNWYHEaAmjKnoBUiFuoh0",
        authDomain: "appeventos-2ae82.firebaseapp.com",
        databaseURL: "https://appeventos-2ae82.firebaseio.com",
        projectId: "appeventos-2ae82",
        storageBucket: "appeventos-2ae82.appspot.com",
        messagingSenderId: "753074143663"
    };
    firebase.initializeApp(config);

    module.exports.firebase = firebase;
    module.exports.config = config; 