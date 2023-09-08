import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useFavoritoStore } from "./favoritos";
import { useBebidasStore } from "./bebidas";

export const useModalStore = defineStore("modal", () => {
  const favoritos = useFavoritoStore();
  const bebidas = useBebidasStore();
  const modal = ref(false);

  function handleClickModal() {
    modal.value = !modal.value;
  }

  const textoBoton = computed(() => {
    return favoritos.existeFavoritos(bebidas.receta.idDrink)
      ? "Eliminar de Favoritos"
      : "Agregar a Favoritos";
  });

  return {
    modal,
    handleClickModal,
    textoBoton,
  };
});
