<template>
  <div class="main section">
    <div class="container">
      <h1 class="title">Задачи</h1>
      <FetchTodoComponent/>
      <div class="main__lists">
        <ListComponent
            v-for="(list, index) in lists"
            :key="index"
            :list="list"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ListComponent from "@/components/list/ListComponent";
import FetchTodoComponent from "@/components/utils/FetchTodoComponent";

export default {
  name: "MainView",
  data() {
    return {}
  },
  components: {
    ListComponent,
    FetchTodoComponent
  },
  computed: {
    lists() {
      return this.$store.getters.groupedLists;
    },
    error() {
      return this.$store.state.error;
    }
  },
}
</script>


<style lang="scss" scoped>
  .main {
    &__lists {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }

    @media(max-width:669px) {
      &__lists {
        gap: 50px;
      }
    }
  }
</style>