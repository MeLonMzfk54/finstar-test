<template>
  <div class="users-chart">

  </div>
</template>

<script>
  export default {
    name: 'usersChart',
    data(){
      return {
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


