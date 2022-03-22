<template>
  <Dialog ref="dialogMessage" />
  <div v-if="isLoading" class="flex items-center justify-center" style="height: 80vh">
    <Loading class="h-16 w-16" />
  </div>
  <div v-else>
    <Navbar />
    <div class="main-set">
      <router-view v-slot="{ Component, route }">
        <transition name="slide" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>
  </div>
  <Footer />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Dialog from '@/components/Dialog.vue';
import Loading from '@/components/Loading.vue';
import * as utils from './utils';
import Footer from './components/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Loading,
    Dialog,
    Footer
  },
  setup(props) {
    const isLoading = ref(true);
    const dialogMessage = ref(null);
    onMounted(() => {
      console.log('dialog.value :>> ', dialogMessage.value);
      utils.DialogMessage.dialogRef = dialogMessage;
    });
    // getUserState().then(() => {
    isLoading.value = false;
    // });
    return {
      dialogMessage,
      isLoading
    };
  }
});
</script>

<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.2s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}
</style>
