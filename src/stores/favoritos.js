import { ref, watch, onMounted } from "vue";
import { defineStore } from "pinia";
import { useBebidasStore } from "./bebidas";

export const useFavoritoStore = defineStore("favoritos", () => {
  const bebidas = useBebidasStore();
  const favoritos = ref([]);

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem("favoritos")) ?? [];
  });

  watch(
    favoritos,
    () => {
      sincronizarLocalStorage();
    },
    {
      deep: true,
    }
  );

  function sincronizarLocalStorage() {
    localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
  }

  function existeFavoritos(id) {
    const favoritosLocalStorage =
      JSON.parse(localStorage.getItem("favoritos")) ?? [];
    return favoritosLocalStorage.some((favorito) => favorito.idDrink === id);
  }

  function handleClickFavorito() {
    if (existeFavoritos(bebidas.receta.idDrink)) {
      console.log("Ya existe....");
    } else {
      favoritos.value.push(bebidas.receta);
    }
  }

  return {
    favoritos,
    handleClickFavorito,
    existeFavoritos,
  };
});
