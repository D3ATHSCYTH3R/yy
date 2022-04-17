var firebaseConfig = {
    apiKey: "AIzaSyB2E-Ti1CBOSUXw7-2P4q0Ttm9fDE1AT8U",
    authDomain: "kwitter-1c1ee.firebaseapp.com",
    databaseURL: "https://kwitter-1c1ee-default-rtdb.firebaseio.com",
    projectId: "kwitter-1c1ee",
    storageBucket: "kwitter-1c1ee.appspot.com",
    messagingSenderId: "704977715274",
    appId: "1:704977715274:web:45995fa7a46e26243866b3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  function logout(){
    localStorage.removeItem("un");
    localStorage.removeItem("iv");
    window.location="index.html";
}


function send(){
    
    vi1=document.getElementById("i1").value;
    firebase.database().ref(room_name).push({
name:user_name, 
message: i1,
like:0
 
    });
    document.getElementById("i1").innerHTML="";
}