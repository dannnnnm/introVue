import { defineStore } from "pinia";

export const useAppStore=defineStore({
  id: 'app',
  state: ()=>({
    dato:"dato de la store app",
  }),
  actions: {}
})