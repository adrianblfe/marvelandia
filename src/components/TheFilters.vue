<template>
    <div class="filters col-12">
        <div class="row">
            <div class="col-3 d-flex align-items-center">
                <input v-model="heroeName" class="form-control form-control-sm" type="text" placeholder="Nombre" aria-label="heroe-name">
            </div>
        
            <div class="col-3">
                <TheAutocomplete :value="comicSelected?.title || ''" placeholder="Comics" store="comics" :item-text="'title'" param-search="title" @select-item="(item) => comicSelected = item" />
            </div>

            <div class="col-3">
                <TheAutocomplete :value="eventSelected?.title || ''" placeholder="Eventos" store="events" :item-text="'title'" param-search="nameStartsWith" @select-item="(item) => eventSelected = item" />
            </div>

            <div class="col-3">
                <button type="button" class="btn btn-primary btn-sm filter-btn">Buscar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useComicsStore } from '../stores/comics'
import { useEventsStore } from '../stores/events'

export default {
    name: 'TheFilters',
    components: {
        TheAutocomplete: () => import('./TheAutocomplete.vue')
    },
    data() {
        return {
            comicTimeoutId: null,
            eventTimeoutId: null,
            showEventResults: false,
            comicSelected: null,
            eventSelected: null,
            heroeName: null,
        };
    },
    computed: {
        ...mapState(useComicsStore, ['comics', 'offset', 'limit', 'isLoading']),
        ...mapState(useEventsStore, ['events', 'offset', 'limit', 'isLoading']),
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