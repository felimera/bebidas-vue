import { ref } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const modal = ref(false);

  handleClickModal();
  {
    modal.value = !modal.value;
  }

  return {
    modal,
    handleClickModal,
  };
});
