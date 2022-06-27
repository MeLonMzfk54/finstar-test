<template>
  <div class="list">
    <HeaderListComponent
        :userId="userId"
        :statistics="statistics"
    />
    <hr>
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
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    flex: 0 1 30%;
  }
 /*/deep/*/
</style>