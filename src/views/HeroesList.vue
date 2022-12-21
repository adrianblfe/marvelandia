<template>
    <div id="heroes-list" class="p-4" v-infinite-scroll="loadMore">
        <div class="col-12 d-flex justify-content-center flex-wrap gap-3">
            <HeroeCard :heroe="heroe" v-for="(heroe, index) in heroes" :key="index" />
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
        HeroeCard: () => import('@/components/HeroeCard.vue')
    },  
    data() {
        return {
            playerStore: useHeroesStore(),
        };
    },
    computed: {
        ...mapState(useHeroesStore, ['heroes', 'offset', 'count', 'isLoading']),
    },
    async mounted() {
        await this.getHeroesList();
    },
    methods: {
        ...mapActions(useHeroesStore, ['getHeroesList']),
        loadMore() {
            this.getHeroesList({ offset: this.offset + this.count });
        }
    }
}
</script>

<style lang="scss" scoped>
.loading-icon {
    color: #DFF3E4;
}
</style>