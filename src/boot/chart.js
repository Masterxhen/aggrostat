// import something here
import ChartKick from 'vue-chartkick'
import Chart from 'chart.js'
// "async" is optional
export default async ({ Vue }) => {
  // something to do
  Vue.use(ChartKick.use(Chart))
}
