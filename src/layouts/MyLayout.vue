<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-green-7">
        <q-btn
          v-if="$route.name !== 'Login'"
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="fas fa-bars"
          aria-label="Menu"
        />

        <q-toolbar-title>AgroStat | {{$route.name}}</q-toolbar-title>

        <!-- <q-btn flat round dense icon="whatshot" /> -->
        <q-btn-dropdown v-if="$route.name !== 'Login'" stretch flat icon="fas fa-user-circle" dropdown-icon="fas fa-caret-down">
        <q-list>
          <q-item-label header>Hi Admin</q-item-label>
          <q-item clickable v-close-popup tabindex="0">
            <q-item-section>
              <q-btn icon="fas fa-sign-out-alt" label="Log Out" class="full-width" color="secondary" @click="$store.dispatch('auth/signOut')" text-color="white" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer v-if="$route.name !== 'Login'" v-model="leftDrawerOpen" show-if-above bordered content-class="bg-blue-grey-10">
      <q-list class="text-white">
        <q-item-label header class="text-white">AgroStat Menu</q-item-label>
        <q-item clickable to="/home" active-class="text-green">
          <q-item-section avatar>
            <q-icon name="fas fa-home" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 q-py-lg">Home</q-item-label>
          </q-item-section>
        </q-item>
        <!-- <q-item clickable to="/plant" active-class="text-green">
          <q-item-section avatar>
            <q-icon name="fas fa-leaf" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 q-py-lg">Plant List</q-item-label>
          </q-item-section>
        </q-item> -->
        <q-item clickable to="/almanac" active-class="text-green">
          <q-item-section avatar>
            <q-icon name="fas fa-poll" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 q-py-lg">Plant Almanac</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/settings" active-class="text-green">
          <q-item-section avatar>
            <q-icon name="fas fa-cog" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-body1 q-py-lg">Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MyLayout",

  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
