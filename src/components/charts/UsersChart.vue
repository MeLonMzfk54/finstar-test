<template>
  <div class="users-chart">
    <ApexCharts v-if="lists.length" type="bar" height="350" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
import ApexCharts from 'vue-apexcharts'

  export default {
    name: 'usersChart',
    components: {
      ApexCharts
    },
    computed: {
      lists() {
        return this.$store.getters.groupedLists;
      },
      labels() {
        return this.lists.map(list => `Пользователь ${list.find(el => el.userId).userId}`);
      },
      completedData() {
        return this.lists.map(list => list.reduce((res, item) => item.completed ? res + 1 : res, 0))
      },
      uncompletedData() {
        return this.lists.map(list => list.reduce((res, item) => !item.completed ? res + 1 : res, 0))
      },
      series() {
        return [
          {
            name: 'Невыполненные',
            data: this.uncompletedData
          },
          {
            name: 'Выполненные',
            data: this.completedData,
          },
        ]
      },
      chartOptions() {
        return {
          chart: {
            type: 'bar',
            height: 350,
            stacked: true,
          },
          responsive: [{
            breakpoint: 669,
            options: {
              legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
              }
            }
          }],
          plotOptions: {
            bar: {
              horizontal: false,
              borderRadius: 10
            },
          },
          xaxis: {
            type: 'string',
            categories: this.labels
          },
          legend: {
            position: 'right',
            offsetY: 40
          },
          fill: {
            opacity: 1
          },
          colors: ['#DB4437', '#4285F4']
        }
      }
    }
  }
</script>


