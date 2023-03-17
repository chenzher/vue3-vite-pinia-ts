import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', {
  state: () => {
    const userName = ref('');
    const userNameEn = ref('');
    const setUserName = (name: string) => {
      userName.value = name || '';
    };

    return {
      userNameEn,
      userName,
      setUserName,
    };
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'user',
        storage: localStorage,
      },
    ],
    // strategies: [
    //   {
    //     storage: localStorage,
    //     paths: ['userName'],
    //   },
    //   {
    //     storage: sessionStorage,
    //     paths: ['userNameEn'],
    //   },
    // ],
  },
});
