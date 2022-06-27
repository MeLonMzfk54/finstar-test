<template>
  <div class="list">
    <HeaderListComponent/>
  </div>
</template>

<script>
  import HeaderListComponent from "@/components/list/HeaderListComponent";

  export default {
    name: 'ListComponent',
    data() {
      return {}
    },
    components: {
      HeaderListComponent,
    }
  }
</script>

<style lang="scss" scoped>
 /*/deep/*/
</style>