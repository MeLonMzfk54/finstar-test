<template>
  <div class="main">
    <div class="container">
      <div class="main__fetch">
        <button :disabled="loading" class="main__button" @click="getLists">
          Загрузить данные
        </button>
        <LoaderComponent v-if="loading"/>
      </div>
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
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.state.error;
    }
  },
  methods: {
    async getLists() {
      this.$store.commit('SET_LOADING', true);
      await this.$store.dispatch('fetchLists');
      if (!this.lists.length) {
        this.$store.commit('POST_ERROR', 'Не удалось получить списки');
      }
      this.$store.commit('SET_LOADING', false);
    }
  }
}
</script>


<style lang="scss" scoped>
  .main {
    padding: 10px 0;
    &__fetch {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 50px;
      margin-bottom: 10px;
    }
    &__button {
      padding: 10px;
      transition: .4s all ease;
      &:hover {
        transform: scale(1.05);
      }
    }
    &__lists {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
    }
  }
</style>