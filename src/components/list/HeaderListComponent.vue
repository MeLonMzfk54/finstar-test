<template>
  <div class="list__header header-list">
    <div class="header-list__inner">
      <div class="header-list__name">
        User {{userId}}
      </div>
      <div class="header-list__statistics">
        <span class="header-list__completed header-list__stat"> {{ statistics.completed }}  </span>
        /
        <span class="header-list__uncompleted header-list__stat"> {{ statistics.uncompleted }} </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['userId', 'statistics'],
    name: 'HeaderList',
    data() {
      return {}
    },
  }
</script>

<style lang="scss" scoped>
 .header-list {
   &__inner {
     display: flex;
     justify-content: space-between;
     align-items: center;
   }
   &__name {
     font-weight: bold;
     text-transform: uppercase;
   }
   &__statistics {}
   &__completed {
     color: lawngreen;
   }
   &__uncompleted {
     color: red;
   }
 }
</style>