import { defineStore } from "pinia";
import Vue from "vue";

export const useHeroesStore = defineStore('heroes', {
    state: () => ({
        heroes: [],
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        isLoading: false,
    }),
    getters: {
        getHeroeById(state) {
            return (id) => {
                return state.heroes.find((heroe) => heroe.id === id);
            }
        },
    },
    actions: {
        async getHeroesList(params) {
            this.isLoading = true;
            await Vue.axios.get('/characters', { params: params })
                .then(({ data }) => {
                    if (Object.keys(params).includes('count') || Object.keys(params).includes('offset')) {
                        this.heroes.push(...data.data.results);
                    } else {
                        this.heroes = data.data.results;
                    }
                    this.count = data.data.count;
                    this.total = data.data.total; 
                    this.limit = data.data.limit; 
                    this.offset = data.data.offset; 
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
    persist: false,
});