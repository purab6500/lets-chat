//YOUR FIREBASE LINKS

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

    user_name=localStorage.getItem("user_name");
    room_names=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_names).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }

function getData() { firebase.database().ref("/"+room_names).on('value', function(snapshot) { document.getElementById("outputs").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      name=message_data['name'];
      message=message_data['message'];
      like=message_data['like'];
      name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
      message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
      like_button="<button class='btn btn-info'id="+firebase_message_id+" value="+like+"onclick='update_like(this.id)'>";
      span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
      row=name_with_tag+message_with_tag+like_button+span_with_tag;
      document.getElementById("outputs").innerHTML=row;

    
//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
