// import something here
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { firestorePlugin } from 'vuefire'
const firebaseConfig = {
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
const db = firebase.firestore()
export const auth = firebase.auth()
// "async" is optional
export default async ({ store, router, Vue }) => {
  // something to do
  Vue.use(firestorePlugin)
  Vue.prototype.$db = db
  Vue.prototype.$auth = auth

  router.beforeEach((to, from, next) => {
    let authRequired = to.matched.some(route => route.meta.requiresAuth)
    auth.onAuthStateChanged(user => {
      console.log(user)
      if (authRequired) {
        // calls the user's state from firebase if logged in
        if (user) {
          // store.commit('auth/setUser', user)
          store.state.user = user
          // console.log(`State: ${store.state.user}`)
          next()
        } else {
          // store.commit('auth/resetUser')
          store.state.user = null
          // console.log(`State: ${store.state.user}`)
          next('/')
        }
      } else {
        if (user) {
          // autheticated but going to address for non authenticated user or simply going back to login while authenticated
          // store.commit('auth/setUser', user)
          store.state.user = user
          // console.log(`State: ${store.state.user}`)
          next('/home')
        } else {
          // store.commit('auth/resetUser')
          store.state.user = null
          // console.log(`State: ${store.state.user}`)
          next()
        }
      }
    })
  })
}
