
function login() {
    
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
    ).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        alert(getErrorMessage(error));
    });
}

    
    /* window.location.href = "login.html"; */




function signup() {
    window.location.href = "signup.html"
}


const firebaseConfig = {
    apiKey: "AIzaSyCxHjnIj8BocLL1DBJEWF8XuTkullOaKxI",
    authDomain: "login-js-10055.firebaseapp.com",
    projectId: "login-js-10055",
    storageBucket: "login-js-10055.appspot.com",
    messagingSenderId: "542666832249",
    appId: "1:542666832249:web:cd212e4727303ba3a2d7a8",
    measurementId: "G-PF106Y6XRE"
};
firebase.initializeApp(firebaseConfig);

console.log('antes');
firebase.auth().signInWithEmailAndPassword("roberta.amaro89@gmail.com", "123456").then(response => {
    window.location.href = "login.html"
}).catch(error => {
    console.log('error', error)
});
console.log('depois')