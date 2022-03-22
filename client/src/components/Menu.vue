<template>
  <!-- Profile dropdown -->
  <div class="ml-3 relative">
    <div>
      <button
        type="button"
        class="text-lg h-8 w-8 rounded-full hover:bg-primary"
        aria-expanded="false"
        aria-haspopup="true"
        @click="toggle"
      >
        <font-awesome-icon :icon="['fas', 'bars']" class="" />
      </button>
    </div>
    <transition name="fade">
      <div
        v-if="show"
        class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-slate-800 text-white font-heading"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
        tabindex="-1"
      >
        <router-link
          v-for="(item, n) in menuAuth"
          :key="n"
          :to="item.link"
          class="block px-4 py-2 text-sm"
          @click="toggle"
        >
          {{ item.name }}
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'Menu',
  setup() {
    const menuAuth = [{ name: 'Profile', link: { name: 'Profile' } }];

    const show = ref(false);
    const toggle = () => {
      show.value = !show.value;
    };

    const router = useRouter();

    return {
      show,
      toggle,
      menuAuth
    };
  }
});
</script>

<style lang="postcss" scoped>
.menu-button {
  @apply py-2 px-4 ml-2 font-heading rounded bg-primary
  hover:bg-opacity-75;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
