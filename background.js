var firebaseConfig = {
  apiKey: "AIzaSyCF71-36MbwJ48biqSeHE-USMPrYxE4qXU",
  authDomain: "surprise-list-v2.firebaseapp.com",
  databaseURL: "https://surprise-list-v2.firebaseio.com",
  projectId: "surprise-list-v2",
  storageBucket: "surprise-list-v2.appspot.com",
  messagingSenderId: "1045559559692",
  appId: "1:1045559559692:web:387766376579dd12b61029"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

console.log("Hello from Chrome extension");
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
  var url = tabs[0].url;
  console.log(url);
});

// function initApp() {
//   firebase.auth().onAuthStateChanged(function(user) {
//     console.log('User state change detected from the Backgroudn script of the YouTube List Chrome Extension')
//   });
// }
//
// window.onload = function() {
//   initApp();
//
//   appDb.push({text: "Hello"});
// };
