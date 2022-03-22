import { onMounted, ref } from 'vue';
import { ethers } from 'ethers';
import { DialogMessage } from '../utils';

let ethersProvider;
export const init = () => {
  onMounted(() => {
    if (typeof window.ethereum === 'undefined') return;
    if (!window.ethereum.isConnected) return;
    ethersProvider = new ethers.providers.Web3Provider(window.ethereum, 'any');
    checkNetwork();
    window.ethereum.on('chainChanged', (chainId) => {
      checkNetwork();
    });
    window.ethereum.on('accountsChanged', (accounts) => {
      window.location.reload();
    });
  });
};

export const connectMetamask = async () => {
  try {
    if (typeof window.ethereum === 'undefined') {
      DialogMessage.showMessage({
        title: 'Can not connect to metamask',
        description: `Message: Please install metamask`
      });
      return false;
    }
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    return true;
  } catch (e) {
    DialogMessage.showMessage({
      title: 'Can not connect to metamask',
      description: `Message: ${e.message}`
    });
    return false;
  }
};

export const checkNetwork = () => {
  const netId = window.ethereum.chainId;
  const isValid = netId === process.env.VUE_APP_BSC_ID;
  if (!isValid)
    DialogMessage.showMessage({
      title: 'Wrong chain',
      description: `Wallet chain doesn't match Binance Smart Chain chain id (56), please change it.
  `
    });
};

export const useWalletInfo = () => {
  try {
    const isInstalled = ref(false);
    const isConnected = ref(false);
    const address = ref(null);
    const isValidChain = ref(false);
    onMounted(() => {
      isInstalled.value = Boolean(window.ethereum);
      isConnected.value = isInstalled.value && window.ethereum.isConnected();
      const netId = isInstalled.value && window.ethereum.chainId;
      isValidChain.value = netId === process.env.VUE_APP_BSC_ID;
      address.value = isInstalled.value && window.ethereum.selectedAddress;
    });

    return { address, isValidChain, isConnected, isInstalled };
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getBalance = async (address) => {
  if (!address) return;
  const balance = await window.ethereum.request({
    method: 'eth_getBalance',
    params: [address, 'latest']
  });
  return balance;
};

export const signMessage = async ({ setError, message }) => {
  try {
    console.log({ message });
    if (!window.ethereum) throw new Error('No crypto wallet found. Please install it.');

    await window.ethereum.send('eth_requestAccounts');
    const signer = ethersProvider.getSigner();
    const signature = await signer.signMessage(message);
    const address = await signer.getAddress();

    return {
      message,
      signature,
      address
    };
  } catch (err) {
    setError(err.message);
  }
};
