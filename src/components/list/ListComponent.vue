<template>
  <div class="list">
    <div class="list__inner" :class="{expand: isExpand}">
      <HeaderListComponent
          :userId="userId"
          :statistics="statistics"
      />
      <hr>
      <button class="list__button btn" @click="isExpand = !isExpand">{{ !isExpand ? 'Развернуть' : 'Свернуть' }}</button>
      <div
          class="list__item"
          v-for="item in list"
          :class="{ completed: item.completed }"
          :key="item.id"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderListComponent from "@/components/list/HeaderListComponent";

  export default {
    name: 'ListComponent',
    props: ['list'],
    data() {
      return {
        isExpand: false,
      }
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
    position: relative;
    min-width: 310px;
    border-radius: 8px;
    box-shadow: 0 0 20px 8px #d0d0d0;
    flex: 0 1 30%;
    &__inner {
      padding: 10px;
    }
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
    &__button {
      border: 1px solid black;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 50%);
      z-index: 100;
      display: none;
    }
    @media(max-width: 669px) {
      &__inner {
        max-height: 250px;
        overflow: hidden;
        &:after {
          content: '';
          position: absolute;
          left: 0px;
          right: 0px;
          height: 50%;
          bottom: 0px;
          background: linear-gradient(180deg, rgba(139,167,32,0) 0%, rgba(255,255,255,1) 100%);
          pointer-events: none;
        }
        &.expand {
          &:after {
            display: none;
          }
          max-height: 100%;
        }
      }
      &__button {
        display: block;
      }
    }
  }
</style>