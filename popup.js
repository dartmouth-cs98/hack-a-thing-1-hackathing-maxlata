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
const app = firebase.initializeApp(firebaseConfig);
const appDb = app.database().ref();

function postToFirebase() {
  var comment = getComment();
  var link = getCurrentURL(getLink);
  link = "https://www.youtube.com/watch?v=JAM_ONZgPnE";
  console.log(link);
  console.log(comment);

  var data = {
    comment: comment,
    link: link
  };
  var updates = {};

  updates['links'] = data;

  return appDb.set(updates);
}

function getLink() {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    if (tabs[0]) {
      var url = tabs[0].url;
    } else {
      url = "";
    }
    console.log(url);
    return url;
  });
}

function getComment() {
  return document.getElementById("comment").value;
}

function returnLink(link) {
  return link;
}

function getCurrentURL(callback) {
  chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
    var tab = tabs[0];
    var url = tab.url;

    console.log(url + "!");
    callback(url);
  });
}
