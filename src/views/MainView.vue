<template>
  <div class="main">
    <div class="container">
      <button class="main__button" @click="getLists">
        Загрузить данные
      </button>
      <div>
        {{ lists }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {}
  },
  computed: {
    lists() {
      return this.$store.getters.groupedLists;
    }
  },
  methods: {
    async getLists() {
      await this.$store.dispatch('fetchLists')
    }
  }
}
</script>


<style lang="scss">
  .main {
    padding: 10px 0px;
    &__button {
      padding: 10px;
      transition: .4s all ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
</style>