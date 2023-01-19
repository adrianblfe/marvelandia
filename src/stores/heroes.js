import { defineStore } from "pinia";
import Vue from "vue";

export const useHeroesStore = defineStore('heroes', {
    state: () => ({
        heroes: [],
        heroeName: null,
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
        async getHeroesList(params = {}) {
            this.isLoading = true;
            await Vue.axios.get('/characters', { params: params })
                .then(({ data }) => {
                    if (('limit' in params && Object.keys(params).includes('limit')) || ('offset' in params && Object.keys(params).includes('offset'))) {
                        this.heroes.push(...data.data.results);
                    } else {
                        this.heroes = data.data.results;
                    }
                    this.count = data.data.count;
                    this.total = data.data.total; 
                    this.limit = data.data.limit;
                    this.offset = this.offset + data.data.limit;
                })
                .catch((error) => console.error(error))
                .finally(() => {
                    this.isLoading = false;
                });
        },
        setHeroeName(name) {
            this.heroeName = name;
        },
        resetOffset() {
            this.offset = 0;
        }
    },
    persist: true,
});