<template>
  <nav class="transition-effect nav-style px-2 md:px-0">
    <div class="main-set flex justify-between items-center">
      <h1 class="font-bold text-primary cursor-pointer" @click="goToHome">R1 Fund</h1>
      <Connect></Connect>
    </div>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';
import Menu from './Menu.vue';
import Connect from './Connect.vue';

export default defineComponent({
  components: { Menu, Connect },
  setup() {
    const router = useRouter();

    const goToHome = () => {
      router.push({ name: 'Home' });
    };
    return { goToHome };
  }
});
</script>

<style lang="postcss" scoped>
.nav-style {
  @apply py-2 px-2 top-0 z-10 sticky
  shadow-md bg-black
  bg-opacity-20
  backdrop-filter backdrop-blur-sm;
}
.nav-link {
  @apply py-2 px-4 ml-2 font-heading rounded-xl
  hover:bg-slate-600;
}
</style>
