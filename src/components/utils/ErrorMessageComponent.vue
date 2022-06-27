<template>
  <transition name="fadeAway">
    <div class="error" v-if="error">
      <h2 class="error__title">
        Ошибка
      </h2>
      <p class="error__message">
        {{ error }}
      </p>
      <div class="error__actions">
        <button
            class="error__dismiss"
            @click.prevent="dismiss"
        >
          Закрыть
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ErrorMessage",
  data() {
    return {
      dismissTimeout: null,
    }
  },
  methods: {
    dismiss() {
      this.$store.state.error = "";
    },
  },
  beforeDestroy() {
    clearTimeout(this.dismissTimeout);
  },
  computed: {
    error() {
      return this.$store.getters.errorMessage;
    }
  },
  watch: {
    error() {
      this.error ? this.dismissTimeout = setTimeout(this.dismiss, 5000) : clearTimeout(this.dismissTimeout);
    }
  }
};
</script>

<style lang="scss" scoped>
.error {
  position: fixed;
  right: 50px;
  top: 20px;
  max-width: 400px;
  min-width: 200px;
  background: hsl(0, 80%, 95%);
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 7px;
  padding: 0 0 5px;
  text-align: center;
  &__title {
    text-align: left;
    background-color: hsl(0, 80%, 70%);
    margin: 0;
    border-radius: 7px 7px 0 0;
    color: #f3f3f3;
    padding: 5px 10px;
    font-size: 1.17em;
  }
  &__message {
    margin: 10px 0;
  }
  &__actions {
    text-align: right;
    padding-right: 1rem;
    padding-bottom: 0.5rem;
    button {
      padding: 0.2rem 1rem;
    }
  }
  &__dismiss {
    background-color: #eb4747;
    border-color: #eb4747;
    color: #f3f3f3;
    border-radius: 4px;
  }
}

.fadeAway-enter-active {
  transition: all 0.3s ease;
}

.fadeAway-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fadeAway-leave-to,
.fadeAway-enter {
  opacity: 0;
  transform: translateX(100px);
}
</style>