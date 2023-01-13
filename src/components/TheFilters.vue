<template>
    <div class="filters col-12 d-flex flex-wrap gap-3" @keypress.enter="filterHeroes">
        <div>
            <input :value="heroeName" class="form-control form-control-sm" type="text" placeholder="Nombre" aria-label="heroe-name" @input="(event) => setHeroeName(event.target.value)">
        </div>
        <TheAutocomplete :value="selectedComic?.title || ''" placeholder="Comics" store="comics" :item-text="'title'" param-search="title" @select-item="(item) => selectComic(item)" />
        <TheAutocomplete :value="selectedEvent?.title || ''" placeholder="Eventos" store="events" :item-text="'title'" param-search="nameStartsWith" @select-item="(item) => selectEvent(item)" />
        <button type="button" class="btn btn-primary btn-sm filter-btn" @click="filterHeroes">Buscar</button>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useComicsStore } from '../stores/comics'
import { useEventsStore } from '../stores/events'
import { useHeroesStore } from '../stores/heroes'

export default {
    name: 'TheFilters',
    components: {
        TheAutocomplete: () => import('./TheAutocomplete.vue')
    },
    data() {
        return {
            showEventResults: false,
        };
    },
    computed: {
        ...mapState(useComicsStore, ['comics', 'selectedComic', 'offset', 'limit', 'isLoading']),
        ...mapState(useEventsStore, ['events', 'selectedEvent', 'offset', 'limit', 'isLoading']),
        ...mapState(useHeroesStore, ['heroes', 'heroeName']),
    },
    methods: {
        ...mapActions(useEventsStore, ['selectEvent']),
        ...mapActions(useComicsStore, ['selectComic']),
        ...mapActions(useHeroesStore, ['getHeroesList', 'setHeroeName']),
        filterHeroes() {
            const params = {
                nameStartsWith: this.heroeName.length ? this.heroeName : undefined,
                comics: this.selectedComic?.id ? this.selectedComic.id : undefined,
                events: this.selectedEvent?.id ? this.selectedEvent.id : undefined,
            };

            this.getHeroesList(params);
        }
    },
}
</script>

<style lang="scss" scoped>
.filters {
    .filter-btn {
        background-color: $purple;
    }
    .list-group-default {
        z-index: 9999;
        position: absolute;
    }
    .list-group-comics {
        max-height: 350px;
        overflow-y: auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}
</style>