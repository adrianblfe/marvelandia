<template>
    <div id="heroes-list">
        <h1>Heroes List</h1>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useHeroesStore } from '../stores/heroes'

export default {
    name: 'HeroesList',
    data() {
        return {
            playerStore: useHeroesStore()
        };
    },
    computed: {
        ...mapState(useHeroesStore, ['playersFiltered']),
    },
    async mounted() {
        await this.getHeroesList();
    },
    methods: {
        ...mapActions(useHeroesStore, ['getHeroesList']),
    }
}
</script>

<style lang="scss" scoped>
</style>