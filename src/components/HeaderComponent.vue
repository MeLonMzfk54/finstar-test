<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__nav">
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
    background: #282C34;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 25px;
    }
    &__link {
      position: relative;
      cursor: pointer;
      color: #f6f4e6;
      text-decoration: none;
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 500;
      display: inline-block;
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
      &:hover,
      &.active{
        &:before {
          content: '';
          position: absolute;
          display: block;
          background: #fddb3a;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          left: -10px;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        color: #fddb3a;
      }
    }
    @media(max-width: 669px) {
      &__link {
        font-size: 14px;
      }
    }
  }
</style>