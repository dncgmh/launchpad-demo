<template>
  <div></div>
</template>

<script>
import { useRouter } from 'vue-router';
import { defineComponent, ref } from 'vue';
import Loading from '@/components/Loading.vue';

export default defineComponent({
  name: 'Home',
  components: {
    Loading
  },
  setup() {
    const router = useRouter();

    const loading = ref(false);

    return { loading };
  }
});
</script>
