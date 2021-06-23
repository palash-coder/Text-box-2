//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyD26bVVIB5qVTvgcaLwFbh8I5zl3wChlMM",
    authDomain: "kwitter-2cd28.firebaseapp.com",
    projectId: "kwitter-2cd28",
    storageBucket: "kwitter-2cd28.appspot.com",
    messagingSenderId: "13131347643",
    appId: "1:13131347643:web:48d5303a8a89616f67db9e",
    measurementId: "G-5FJPTNZK46"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


  function addRoom() 
  {
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

     localStorage.setItem("room_name", room_name);

     window.location = "Text box_page.html";
  } 