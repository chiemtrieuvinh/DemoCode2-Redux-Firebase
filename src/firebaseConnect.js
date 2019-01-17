import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC3j5-JQJCiY_qp-8Zfc4zrQBJBteExUok",
    authDomain: "notereact-ff092.firebaseapp.com",
    databaseURL: "https://notereact-ff092.firebaseio.com",
    projectId: "notereact-ff092",
    storageBucket: "notereact-ff092.appspot.com",
    messagingSenderId: "747669299711"
  };
 
  export const firebaseConnect = firebase.initializeApp(config);

  var data = firebase.database().ref('dataForNote/');


  data.once('value').then(function(snapshot){
      console.log(snapshot.val())
  })