<template>
  <div id="demo">
    <div v-if="balance" class="inline-flex">{{ balance.toFixed(3) }} <span class="pl-1 text-slate-500"> BNB</span></div>
    <button
      v-if="!address"
      type="button"
      @click="connect"
      class="t-btn w-full inline-flex items-center bg-primary hover:bg-opacity-75"
    >
      <!-- <font-awesome-icon :icon="['fab', 'google']" class="mr-2" /> -->
      Connect Wallet
    </button>
    <button v-else type="button" @click="goToProfile">
      <p class="truncate w-24">
        <img :src="bnbLogo" v-if="isValidChain" class="h-5 inline pr-1" alt="" />
        {{ address }}
      </p>
    </button>
  </div>
</template>
<script>
import { defineComponent, ref, watchEffect } from 'vue';
import { useRouter } from 'vue-router';
import bnbLogo from '../assets/bnb.svg';
import { connectMetamask, getBalance, init, useWalletInfo } from '../provider/metamask';
import * as utils from '../utils';

export default defineComponent({
  components: {},
  name: 'Connect',
  setup() {
    init();
    const router = useRouter();
    const { address, isValidChain, isConnected, isInstalled } = useWalletInfo();
    const balance = ref(0);
    const connect = async () => {
      isConnected.value = await connectMetamask();
    };
    watchEffect(async () => {
      if (isValidChain) {
        let result = await getBalance(address.value);
        balance.value = utils.convertToNumber(result, 18);
      }
    });
    const goToProfile = () => {
      router.push({ name: 'Profile' });
    };
    return { connect, address, bnbLogo, isValidChain, balance, isConnected, isInstalled, goToProfile };
  }
});
</script>
<style lang="postcss" scoped>
button {
  @apply py-2 px-4 ml-2 font-heading rounded-xl bg-slate-500
  hover:bg-opacity-75;
}
</style>
