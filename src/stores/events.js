import { defineStore } from "pinia";
import Vue from "vue";

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [],
        selectedEvent: {},
        offset: 0,
        limit: 0,
        total: 0,
        count: 0,
        isLoading: false,
    }),
    actions: {
        async getEventsList(params = {}) {
            this.isLoading = true;
            await Vue.axios.get('/events', { params: params })
                .then(({ data }) => {
                    this.events = data.data.results;
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
        clearEvents() {
            this.events = [];
        },
        selectEvent(event) {
            this.selectedEvent = event;
        },
    },
    persist: false,
});