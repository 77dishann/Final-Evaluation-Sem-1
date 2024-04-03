// Initialize Firebase with your config



const firebaseConfig = {apiKey: "AIzaSyBTTkJY9p-84NAl3jJxqi54cHqr8Gl_CX0",
authDomain: "euphoria-7a12e.firebaseapp.com",
projectId: "euphoria-7a12e",
storageBucket: "euphoria-7a12e.appspot.com",
messagingSenderId: "139889340583",
appId: "1:139889340583:web:92792c21975425911cab82"
};

firebase.initializeApp(firebaseConfig);

// Firebase authentication
const auth = firebase.auth();

// Firebase Realtime Database
const database = firebase.database();

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log('Login successful:', user);
        })
        .catch(error => {
            console.error('Login error:', error.message);
        });
}

// Register function
function register() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            console.log('Registration successful:', user);

            // Save user data to the Realtime Database
            database.ref('users/' + user.uid).set({
                name: name,
                email: email
            });
        })
        .catch(error => {
            console.error('Registration error:', error.message);
        });
}
