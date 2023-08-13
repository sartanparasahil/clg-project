const { default: firebase } = require("@firebase/app-compat");

const firebaseConfig = {
    apiKey: "AIzaSyCA2X5_NDAOs2VK3X6WqeZG3SLx4dJxjaI",
    authDomain: "power-pluse.firebaseapp.com",
    databaseURL: "https://power-pluse-default-rtdb.firebaseio.com",
    projectId: "power-pluse",
    storageBucket: "power-pluse.appspot.com",
    messagingSenderId: "1069333816107",
    appId: "1:1069333816107:web:c84002acf34033351d1b6e",
    measurementId: "G-VKLDXL052Q"
  };

  firebase.initializeApp(firebaseConfig);

  var loginformDB = firebase.database().ref("loginform");

  function submitform(e){
    e.preventDefault();
  }

