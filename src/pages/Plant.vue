<template>
  <q-page padding class="q-pa-xl">
    <!-- content -->
    <div class="row text-center">
      <div class="col-xs-12 q-pa-md">
        <p class="text-body1">Tracking</p>
        <area-chart :data="{'2017-05-13': 2, '2017-05-14': 5, '2017-05-15': 20, '2017-05-16': 21}"></area-chart>
      </div>
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
            70%
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            PH Level
          </q-card-section>
          <q-card-section class="text-h2 q-py-xl">
            6.0
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Temperature
          </q-card-section>
          <q-card-section class="text-h2 q-py-xl">
            35°C
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Moisture
          </q-card-section>
          <q-card-section class="text-h3 q-py-xl">
            Normal
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Nutrient Level
          </q-card-section>
          <q-card-section class="text-h3 q-py-xl">
            Normal
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-md-4 q-pa-md">
        <q-card class="bg-green-2">
          <q-card-section class="text-h5 q-py-lg">
            Sunlight
          </q-card-section>
          <q-card-section class="text-h3 q-py-xl">
            Normal
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: () => ({
    soilRec: []
  }),
  created() {
    this.$bind('soilRec', this.$db.collection('soilNo'))
  },
  mounted() {
    console.log(this.soilRec)
  },
}
</script>
