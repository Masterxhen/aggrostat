<template>
  <q-page class="flex flex-center">
    <!-- content -->
    <q-card class="bg-teal text-white text-center" style="width: 300px">
      <q-card-section>
        <q-avatar size="250px" icon="fas fa-user-circle"></q-avatar>
      </q-card-section>

      <q-card-section>
        <q-input class="q-py-sm" v-model="email" dark label="Email" placeholder="Enter Email" standout="bg-green-2"></q-input>
        <q-input class="q-py-sm" v-model="password" dark label="password" type="password" placeholder="Enter Password" standout="bg-green-2"></q-input>
      </q-card-section>

      <q-card-section>
        <q-btn flat stretch @click="login()" class="full-width" color="primary" icon-right="fas fa-unlock">Login</q-btn>
      </q-card-section>
      <q-card-section>
        <q-btn flat stretch @click="cleartext()" class="full-width" color="negative" icon-right="fas fa-redo">Cancel</q-btn>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login() {
      var credentials = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('auth/signIn', credentials).then(() => {
        this.$q.notify('User Has been successfully login')
      }).catch(error => {
        this.$q.notify({
          message: `${error.code} : ${error.message}`
        })
      })
    },
    cleartext() {
      this.email = ''
      this.password = ''
    },
    showNotif () {
      this.$q.notify({
        message: '<em>I can</em> <span style="color: red">use</span> <strong>HTML</strong>',
        html: true
      })
    }
  }
}
</script>
