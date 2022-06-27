<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__nav">
<!--          <router-link-->
<!--              custom-->
<!--              v-slot="{ navigate, isActive }"-->
<!--              v-for="link in navItems"-->
<!--              :key="link.link"-->
<!--              :to="link.link"-->
<!--          >-->
<!--            <div class="header__link" :class="{active: isActive}" @click="navigate">-->
<!--              {{ link.name }}-->
<!--            </div>-->
<!--          </router-link>-->
          <router-link
              v-for="link in navItems"
              :key="link.link"
              :to="link.link"
              custom
              v-slot="{ navigate, isExactActive }"
          >
            <div
                class="header__link"
                :class="[isExactActive && 'active']"
                @click="navigate"
            >
              {{ link.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderComponent',
    data() {
      return {
        navItems: [
          {link: '/', name: 'Задачи пользователей'},
          {link: '/charts', name: 'Графики'},
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: #ABBCC4;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    &__link {
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      transition: .4s all ease;
      color: #000;
      &:hover,
      &.active{
        color: #fff;
      }
    }
  }
</style>