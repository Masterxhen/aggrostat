<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="col-xs-12">
        <p class="text-body1">Getting Started</p>
        <p class="text-body1">Test Your Soil to Calculate</p>
      </div>
      <div class="col-xs-12  q-mb-xl">
        <q-btn justify-center @click="$router.push('/plant')" color="secondary" label="Start" />
      </div>
      <div class="col-xs-12">
        <p class="text-body1">Weather Today</p>
        <weather
          api-key="2dbe4aca7bea03210194c91ff7fbc71b"
          title="Your Location"
          :latitude="`${lat}`"
          :longitude="`${long}`"
          language="en"
          units="uk">
        </weather>
        <!-- <p>Your location data is {{ lat }}, {{ long }}</p> -->
      </div>
      <!-- <div class="col-xs-12 col-md-4">
        <p class="text-body1">Weather Forecast</p>
        <h3>Sunny</h3>
      </div>
      <div class="col-xs-12 col-md-4">
        <p class="text-body1">Weather Forecast</p>
        <h3>Sunny</h3>
      </div>
      <div class="col-xs-12 col-md-4">
        <p class="text-body1">Date</p>
        <p class="text-body1">{{new Date().toLocaleDateString()}}</p>
      </div> -->
    </div>
  </q-page>
</template>

<script>
import VueWeatherWidget from 'vue-weather-widget';
import 'vue-weather-widget/dist/css/vue-weather-widget.css';
export default {
  name: 'PageIndex',
  components: {
    'weather': VueWeatherWidget
  },
  data: () => ({
    lat: null,
    long: null
  }),
  created() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.gettingLocation = false;
      this.lat = pos.coords.latitude;
      this.long = pos.coords.longitude;
      console.log(pos)
    }, err => {
      this.gettingLocation = false;
      this.errorStr = err.message;
    })
  },
  methods: {

  }
}
</script>
