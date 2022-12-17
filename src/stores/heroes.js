import { defineStore } from "pinia";
import Vue from "vue";

export const useHeroesStore = defineStore('heroes', {
    state: () => ({
        heroes: [],
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
    }),
    getters: {
        // getPlayerById(state) {
        //     return (id) => {
        //         return state.players.find((player) => player.id === id);
        //     }
        // },
    },
    actions: {
        async getHeroesList(params) {
            await Vue.axios.get('/characters', { params: params })
                .then(({ data }) => {
                    this.heroes = data.results;
                    this.count = data.count;
                    this.total = data.total; 
                    this.limit = data.limit; 
                    this.offset = data.offset; 
                    
                })
                .catch((error) => console.error(error));
        },
    },
    persist: true,
});