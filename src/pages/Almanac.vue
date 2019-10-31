<template>
  <q-page class="q-pa-xl">
    <div class="row">
      <div class="col-xs-12 col-md-6 q-pa-md" v-for="plant in plantList" :key="plant.id" >
        <q-card class="bg-green-2 text-center">
          <q-card-section class="text-h3 q-py-lg">
            {{plant.name}}
          </q-card-section>
          <q-card-section class="text-body1 q-py-xl">
            <p>Plant Type: {{plant.type}}</p>
            <p>Climate: <q-icon :name="plant.bloomTime === 'Sunny' ? 'fas fa-sun': 'fas fa-cloud-rain' "></q-icon></p>
            <p>Sun Exposure:{{plant.soilExp}}</p>
            <p>Temperature: {{plant.temp}}</p>
            <p>Soil Type: {{plant.soilType}}</p>
            <p>Soil Moisture: {{plant.moisture}}</p>
            <p>pH Level: {{plant.phlvl}}</p>
          </q-card-section>
          <q-card-actions>
            <q-btn flat class="full-width" color="primary" icon="fas fa-edit" label="Edit" @click="editPlant(plant)" />
            <q-btn flat class="full-width" color="red" icon="fas fa-trash" label="Delete" @click="delPlant(plant.id)" />
          </q-card-actions>
          <!-- <q-card-section class="text-h5 q-py-xl">
            {{plant.bloomTime}}
          </q-card-section>
          <q-card-section class="text-h5 q-py-xl">
            {{plant.soilExp}}
          </q-card-section>
          <q-card-section class="text-h5 q-py-xl">
            {{plant.soilph}}
          </q-card-section> -->
        </q-card>
      </div>

      <q-dialog v-model="open" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-teal text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Add New</div>
            {{type}}
          </q-card-section>

          <q-card-section>
            <q-input label="Plant Name" v-model="plntName" standout="bg-green-2"></q-input>
            <q-select standout="bg-teal text-white"  v-model="type" :options="typeOptions" label="Type" map-options dropdown-icon="fas fa-caret-down" />
            <q-input label="Soil Exposure" type="number" v-model="soilExp" standout="bg-green-2"></q-input>
            <q-select standout="bg-teal text-white" v-model="bloomTime" :options="['Sunny','Rainy']" label="Bloom Time" dropdown-icon="fas fa-caret-down" />
            <q-input label="Temperature" type="number" v-model="temp" standout="bg-green-2"></q-input>
            <q-select standout="bg-teal text-white" v-model="soilType" :options="['Loam', 'Sand', 'Silt']" label="Soil Type" dropdown-icon="fas fa-caret-down" />
            <q-input label="PH Level" mask="#.#" v-model="phlvl" standout="bg-green-2"></q-input>
            <q-input label="Moisture" mask="##.##" v-model="moisture" standout="bg-green-2"></q-input>
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="Close" @click="clearText()" />
            <q-btn flat label="Save" @click="saveTrees()" />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <q-page-sticky position="bottom-right" @click="open = true" :offset="[18, 18]">
        <q-btn round color="primary" size="xl" icon="fas fa-plus" @click="open = true"/>
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageName',
  data: () => ({
    open: false,
    edit: false,
    typeOptions: [],
    type: null,
    id: null,
    soilph: '',
    plntName: '',
    soilExp: '',
    bloomTime: '',
    temp: 0,
    moisture: 0,
    soilType: null,
    phlvl: 0,
    soilphOptions: [
      'Low', 'Neutral', 'High'
    ],
    plantList: []
  }),
  methods: {
    clearText () {
      this.open = false
      this.edit = false
      this.soilph = ''
      this.type = ''
      this.bloomTime = ''
      this.soilExp = ''
    },
    saveTrees () {
      if (this.edit) {
        this.$db.collection('tblPlant').doc(this.id).update({
          name: this.plntName,
          soilExp: parseInt(this.soilExp),
          type : this.type,
          bloomTime : this.bloomTime,
          temp: parseInt(this.temp),
          moisture: parseFloat(this.moisture).toFixed(2),
          soilType: this.soilType,
          phlvl: parseFloat(this.phlvl).toFixed(1),
        }).then(() => {
          this.clearText()
        })
      } else {
        this.$db.collection('tblPlant').add({
          name: this.plntName,
          soilExp: parseInt(this.soilExp),
          type : this.type.value,
          bloomTime : this.bloomTime,
          temp: parseInt(this.temp),
          moisture: parseFloat(this.moisture).toFixed(2),
          soilType: this.soilType,
          phlvl: parseFloat(this.phlvl).toFixed(1),
        }).then(() => {
          this.clearText()
        })
      }
    },
    editPlant (plant) {
      this.open = true
      this.edit = true
      this.id = plant.id
      this.plntName = plant.name
      this.soilExp = plant.soilExp
      this.soilph = plant.soilph
      this.type = plant.type
      this.bloomTime = plant.bloomTime
    },
    delPlant (id) {
      this.$db.collection('tblPlant').doc(id).delete().then(() => {
        this.$q.notify({
          message: `Record ${id} has successfully deleted!`
        })
      })
    }
  },
  created () {
    this.$bind('plantList', this.$db.collection('tblPlant'))
    this.$bind('typeOptions', this.$db.collection('tblPlantType'))
  }
}
</script>
