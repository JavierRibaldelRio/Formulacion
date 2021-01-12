// Set the configuration for your app
// TODO: Replace with your project's config object
var config = {
    apiKey: "AIzaSyAdHYXhqQctn_s-aBygwzM-sQh80C8DBBw",
    authDomain: "prueba-firebase-html.firebaseapp.com",
    databaseURL: "https://prueba-firebase-html-default-rtdb.firebaseio.com/",
    storageBucket: "prueba-firebase-html.appspot.com",
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();