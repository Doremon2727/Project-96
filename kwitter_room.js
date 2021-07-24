var firebaseConfig = {
    apiKey: "AIzaSyB98l2UBnsTg6XJej6WcF-1ikdo-uspNuA",
    authDomain: "project-92-ef32f.firebaseapp.com",
    databaseURL: "https://project-92-ef32f-default-rtdb.firebaseio.com",
    projectId: "project-92-ef32f",
    storageBucket: "project-92-ef32f.appspot.com",
    messagingSenderId: "393027262242",
    appId: "1:393027262242:web:6c6d1891670dd24fb4f77b"
  };
 
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addroom() {
         room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
         purpose: "adding room_name"
         });
         localStorage.setItem("room_name", room_name);
         window.location = "kwitter_page.html";
   }

   function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("room name-" + Room_names);
   row = "<div class= 'room_name' id= "+ Room_names +"onclick = 'redirectToRoomName(this.id)'>#" +Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code
   });});}
getData();

function redirectToRoomName(name) {
console.log(name);
localStorage.setItem("room_name", name);
window.location = "index.html";
}
    