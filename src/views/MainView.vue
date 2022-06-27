<template>
  <div class="main">
    <div class="container">
      <div class="main__fetch">
        <button :disabled="loading" class="main__button" @click="getLists">
          Загрузить данные
        </button>
        <LoaderComponent v-if="loading"/>
      </div>
      <div>
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
import LoaderComponent from '@/components/utils/LoaderComponent'
import ListComponent from "@/components/list/ListComponent";

export default {
  name: "MainView",
  data() {
    return {}
  },
  components: {
    LoaderComponent,
    ListComponent
  },
  computed: {
    lists() {
      return this.$store.getters.groupedLists;
    },
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    async getLists() {
      this.$store.commit('SET_LOADING', true);
      await this.$store.dispatch('fetchLists');
      this.$store.commit('SET_LOADING', false);
    }
  }
}
</script>


<style lang="scss" scoped>
  .main {
    padding: 10px 0px;
    &__fetch {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 50px;
    }
    &__button {
      padding: 10px;
      transition: .4s all ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
</style>