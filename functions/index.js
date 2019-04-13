const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.createNewUser = functions.https.onCall(function(data, context){
//     const uid = context.auth.uid;
//     const name = context.auth.token.name;
//     //const picture = context.auth.token.picture;
//     const email = context.auth.token.email;

    
// })

exports.createNewUser = functions.auth.user().onCreate(async (user) => {
    console.log("Reading user properties...");
    const name = user.displayName;
    const email = user.email;
    const id = user.uid;

    console.log("Started writing into firestore...")
    await admin.firestore().collection("userData").doc(id).set({
        name: name || "Johnson & Johnson",
        email: email
    }, 
    {
        merge: true
    });
    console.log("Done!")
    console.log("User data saved.");
});