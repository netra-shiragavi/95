const firebaseConfig = {
  apiKey: "AIzaSyAJHmXTuUQwOl_1dZU2RWk_wXgRnfJM2Ws",
  authDomain: "netra-ee113.firebaseapp.com",
  databaseURL: "https://netra-ee113.firebaseio.com",
  projectId: "netra-ee113",
  storageBucket: "netra-ee113.appspot.com",
  messagingSenderId: "94425444721",
  appId: "1:94425444721:web:50c052c1759a754a0486d0",
  measurementId: "G-M76EX003Q8"
};

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomname= " + Room_names);
        row="<div class='room_name' id="+ Room_names + " onclick='redirectToRoomname(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
        });});}
      //End code

getData();


function redirectToRoomName(name){
      localStorage.setItem("Room_name", name);
      window.location="kwitter_page.html";
      console.log(name);
}

function ADDRoom(){
      room_name=document.getElementById("Room_name").value;
      firebase.database().ref("/").child(Room_name).update({
        purpose: "adding Room_name"
      });

      localStorage.setItem("Room_name", Room_name);
      window.location = "kwitter_page.html"
}

  
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="index.html";
    }


    