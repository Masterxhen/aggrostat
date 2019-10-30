// import something here
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'
var firebaseConfig = {
  apiKey: "AIzaSyB9yigsAO4xOW8yjT-MpxybPr1uVqSV-qo",
  authDomain: "agrostat-c15e0.firebaseapp.com",
  databaseURL: "https://agrostat-c15e0.firebaseio.com",
  projectId: "agrostat-c15e0",
  storageBucket: "agrostat-c15e0.appspot.com",
  messagingSenderId: "931320071862",
  appId: "1:931320071862:web:e054d9a6d00c205cfa4817"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore()
// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.use(firestorePlugin)
  Vue.prototype.$db = db
}
