


var firebaseConfig = {
  apiKey: "AIzaSyAQ_4XmmwIKoFsuiMrQrfj_5Hg-E4KB-_o",
  authDomain: "kwitter-81937.firebaseapp.com",
  databaseURL: "https://kwitter-81937-default-rtdb.firebaseio.com",
  projectId: "kwitter-81937",
  storageBucket: "kwitter-81937.appspot.com",
  messagingSenderId: "414502224131",
  appId: "1:414502224131:web:f55e524fd2726dc6566936"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML="WELCOME  "+user_name+"  !";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding roomname"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("outputs").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   room_names = childKey;
  //Start code
  console.log("roomn name-"+room_names);
  row="<div class='room_name'id="+room_names+" onclick='redirectToRoomName(this.id);'>#"+room_names+"</div><hr>"
  document.getElementById("outputs").innerHTML+=row
  //End code
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location="kwitter_page.html";
}

function log_out(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}
