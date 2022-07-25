const firebaseConfig = {
  apiKey: "AIzaSyACeZE9OksH5QP44B1WESeBuZWkYWblBhI",
  authDomain: "kwitter-dd30b.firebaseapp.com",
  databaseURL: "https://kwitter-dd30b-default-rtdb.firebaseio.com",
  projectId: "kwitter-dd30b",
  storageBucket: "kwitter-dd30b.appspot.com",
  messagingSenderId: "614665516456",
  appId: "1:614665516456:web:3c26b1b70857a3ad19599d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

