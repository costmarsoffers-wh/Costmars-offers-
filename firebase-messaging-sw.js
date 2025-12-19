importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBwMv6b3Pd6Xjn5Nu4Q4RFV_XFR_6BSsoM",
  authDomain: "na3ma-customers.firebaseapp.com",
  databaseURL: "https://na3ma-customers-default-rtdb.firebaseio.com",
  projectId: "na3ma-customers",
  storageBucket: "na3ma-customers.firebasestorage.app",
  messagingSenderId: "118299493181",
  appId: "1:118299493181:web:ea8a0b2f1bfbc2bf0d7b54"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
      icon: "/Costmars-offers-/icon.png"
    }
  );
});

