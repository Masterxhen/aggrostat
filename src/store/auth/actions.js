import { auth } from '../../boot/firebase'
export function signIn (context, payload) {
  let email = payload.email
  let password = payload.password

  auth.signInWithEmailAndPassword(email, password).then(
    user => {
      this.$router.push('/home')
    }
  ).catch(
    error => {
      context.commit('resetUser')
      throw error
    }
  )
}
export function signOut (context) {
  auth.signOut().then(
    () => {
      context.commit('resetUser')
    }
  )
}
