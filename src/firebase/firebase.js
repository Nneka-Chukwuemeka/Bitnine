// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCwhA-3KihPcuYvFmO00fJk5201MzYdyDs',
	authDomain: 'bitnine-net.firebaseapp.com',
	projectId: 'bitnine-net',
	storageBucket: 'bitnine-net.appspot.com',
	messagingSenderId: '75824854908',
	appId: '1:75824854908:web:227bc702dc35807682d6f9',
	measurementId: 'G-YNEFJ436GK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
