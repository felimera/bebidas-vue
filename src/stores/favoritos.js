import { defineStore } from "pinia";

export const useFavoritoStore = defineStore("favoritos", () => {
  const handleClickFavorito = () => {
    console.log("agregando...");
  };

  return {
    handleClickFavorito,
  };
});
