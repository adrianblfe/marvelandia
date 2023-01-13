<template>
    <div id="heroes-list" class="col-12 p-4">
        <div class="row">
            <TheFilters />
        </div>
        
        <div
            class="d-flex justify-content-between flex-wrap gap-3 mt-3"
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="isLoading"
            infinite-scroll-distance="100"
        >
            <HeroeCard :heroe="heroe" v-for="(heroe, index) in heroes" :key="index" />
        </div>

        <div v-if="!isLoading && !heroes.length" class="d-flex justify-content-center align-items-center no-heroes">
            <h4>No se encontraron heroes :(</h4>
        </div>

        <div v-if="isLoading" class="mt-5 mb-8 loading-icon text-center">
            <font-awesome-icon icon="fa-solid fa-spinner" spin />
            Cargando más heroes...
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useHeroesStore } from '../stores/heroes'

export default {
    name: 'HeroesList',
    components: {
        HeroeCard: () => import('@/components/HeroeCard.vue'),
        TheFilters: () => import('@/components/TheFilters.vue')
    },  
    computed: {
        ...mapState(useHeroesStore, ['heroes', 'offset', 'limit', 'isLoading']),
    },
    async mounted() {
        await this.getHeroesList();
    },
    methods: {
        ...mapActions(useHeroesStore, ['getHeroesList']),
        loadMore() {
            if (this.isLoading) {
                return;
            }
            this.getHeroesList({ offset: this.offset + this.limit });
        }
    }
}
</script>

<style lang="scss" scoped>
.loading-icon, .no-heroes {
    color: #DFF3E4;
    height: 100vh;
}
</style>