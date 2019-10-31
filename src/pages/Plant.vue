<template>
  <q-page padding class="q-pa-xl">
    <!-- content -->
    <div class="row text-center">
      <!-- <div class="col-xs-12 q-pa-md">
        <p class="text-body1">Tracking</p>
        <area-chart :data="{'2017-05-13': 2, '2017-05-14': 5, '2017-05-15': 20, '2017-05-16': 21}"></area-chart>
      </div> -->
      <!-- {{suggestions}} -->
      <div class="col-xs-12 q-pa-md">
        <p class="text-body1">Your Soil</p>
        <pie-chart suffix="%" :data="{'Clay': 50, 'Sand': 10, 'Loam': 40}"></pie-chart>
        <p class="text-body1">"Loam Soil"</p>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Humidity
          </q-card-section>
          <q-card-section class="text-h2 q-py-xl">
            <q-icon size="xl" class="q-mr-md" name="fas fa-fan"></q-icon>{{reading.humV}}%
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            PH Level
          </q-card-section>
          <q-card-section class="text-h2 q-py-xl">
            <q-icon size="xl" class="q-mr-md" name="fas fa-tint"></q-icon>{{parseFloat(reading.status).toFixed(1)}}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Temperature
          </q-card-section>
          <q-card-section class="text-h2 q-py-xl">
            <q-icon size="xl" class="q-mr-md" :name="temp > 37 ? 'fas fa-temperature-low' : 'fas fa-temperature-high'"></q-icon>{{reading.Temperature}}°C
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Heat Index (°C)
          </q-card-section>
          <q-card-section class="text-h3 q-py-xl">
            <q-icon size="xl" class="q-mr-md" :name="temp > 37 ? 'fas fa-temperature-low' : 'fas fa-temperature-high'"></q-icon>{{reading.HeatInC}}°C
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Heat Index (°F)
          </q-card-section>
          <q-card-section class="text-h3 q-py-xl">
            <q-icon size="xl" class="q-mr-md" :name="temp < 99 ? 'fas fa-temperature-low' : 'fas fa-temperature-high'"></q-icon>{{reading.HeatInF}}°C
          </q-card-section>
        </q-card>
      </div>
      <p class="col-xs-12 q-pa-md text-h3">Suggestions</p>
      <div class="col-xs-12 col-md-4 q-pa-md" v-for="suggest in suggestions" :key="suggest.id">
        <q-card class="bg-grey-6">
          <q-card-section class="text-h5 q-py-lg">
            {{suggest.name}}
          </q-card-section>
        </q-card>
      </div>
      <q-page-sticky position="bottom-left" @click="open = true" :offset="[18, 18]">
        <q-btn round color="primary" size="xl" icon="fas fa-arrow-left" @click="$router.push('/home')"/>
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: () => ({
    reading: [],
    suggestions: [],
    temp: 80
  }),
  created() {
    this.$bind('reading', this.$db.collection('reading').doc('ggwp'))
    this.$bind('suggestions', this.$db.collection('tblPlant'))
  },
  // mounted () {

  // },
  mounted() {
    console.log(this.reading)
  },
}
</script>
