<template>
  <div class="list">
    <HeaderListComponent
        :userId="userId"
        :statistics="statistics"
    />
    <hr>
    <div
        class="list__item"
        v-for="item in list"
        :class="{ completed: item.completed }"
        :key="item.id"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
  import HeaderListComponent from "@/components/list/HeaderListComponent";

  export default {
    name: 'ListComponent',
    props: ['list'],
    data() {
      return {}
    },
    computed: {
      userId() {
        return this.list[0].userId;
      },
      statistics() {
        const completed = this.list.filter(list => list.completed).length;
        const uncompleted = this.list.filter(list => !list.completed).length;
        return {completed, uncompleted};
      },
    },
    components: {
      HeaderListComponent,
    }
  }
</script>

<style lang="scss" scoped>
  .list {
    min-width: 310px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    flex: 0 1 30%;
    &__item {
      margin: 10px 10px;
      position: relative;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: -15px;
        top: 1px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border-style: solid;
        border-color: #000;
      }
      &.completed {
        &:before {
          top: -3px;
          width: 5px;
          height: 11px;
          border-width: 0 2px 2px 0;
          border-radius: 0;
          border-color: #00a8a8;
          transform-origin: bottom left !important;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>