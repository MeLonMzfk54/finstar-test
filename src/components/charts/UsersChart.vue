<template>
  <div class="users-chart">
    <Bar
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
  </div>
</template>

<script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default {
    name: 'usersChart',
    components: {Bar},
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Object,
        default: () => {}
      }
    },
    data(){
      return {
        chartOptions: {
          responsive: true
        }
      }
    },
    computed: {
      lists() {
        return this.$store.getters.groupedLists;
      },
      labels() {
        return this.lists.map(list => list.find(el => el.userId).userId);
      },
      completedData() {
        return this.lists.map(list => list.reduce((res, item) => item.completed ? res + 1 : res, 0))
      },
      uncompletedData() {
        return this.lists.map(list => list.reduce((res, item) => !item.completed ? res + 1 : res, 0))
      },
      chartData() {
        return {
          labels: this.labels,
          datasets: [
            {
              name: 'Невыполненные',
              data: this.uncompletedData
            },
            {
              name: 'Выполненные',
              data: this.completedData,
            },
          ]
        }
      },
    }
  }
</script>


