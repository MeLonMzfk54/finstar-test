<template>
  <div class="fetch">
    <button :disabled="loading" class="fetch__button btn" @click="getLists">
      Загрузить данные
    </button>
    <LoaderComponent v-if="loading"/>
  </div>
</template>

<script>
  import LoaderComponent from '@/components/utils/LoaderComponent';

  export default {
    name: 'FetchComponent',
    components: {
      LoaderComponent,
    },
    computed: {
      loading() {
        return this.$store.getters.loading;
      },
    },
    methods: {
      async getLists() {
        this.$store.commit('SET_LOADING', true);
        await this.$store.dispatch('fetchLists');
        if (!this.$store.state.lists.length) {
          this.$store.commit('POST_ERROR', 'Не удалось получить списки');
        }
        this.$store.commit('SET_LOADING', false);
      }
    }
  }
</script>


<style lang="scss" scoped>
.fetch {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 50px;
  &__button {
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>