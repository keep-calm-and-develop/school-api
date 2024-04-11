
// const { initializeApp } = require('firebase/app')
// const firebaseConfig = require('./config/firebase.config.js')
// const firebaseApp = initializeApp(firebaseConfig)

const { initializeApp, cert } = require('firebase-admin/app');
const serviceAccount = require('../serviceAccountKey.json');
initializeApp({
  credential: cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET,
});
