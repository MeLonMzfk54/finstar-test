<template>
  <div class="charts section">
    <div class="container">
      <h1 class="title">Графики</h1>
      <FetchTodoComponent/>
      <UsersChart/>
    </div>
  </div>
</template>

<script>
import UsersChart from "@/components/charts/UsersChart";
import FetchTodoComponent from "@/components/utils/FetchTodoComponent";

export default {
  name: "MainView",
  data() {
    return {}
  },
  components: {
    UsersChart,
    FetchTodoComponent
  }

}
</script>


<style lang="scss" scoped>

</style>