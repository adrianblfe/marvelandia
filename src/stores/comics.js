import { defineStore } from "pinia";
import Vue from "vue";

export const useComicsStore = defineStore('comics', {
    state: () => ({
        comics: [],
        selectedComic: {},
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        isLoading: false,
    }),
    actions: {
        async getComicsList(params = {}) {
            this.isLoading = true;
            await Vue.axios.get('/comics', { params: params })
                .then(({ data }) => {
                    this.comics = data.data.results;
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
        selectComic(comic) {
            this.selectedComic = comic;
        }
    },
    persist: false,
});