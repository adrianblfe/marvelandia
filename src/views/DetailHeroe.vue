<template>
    <div class="detail-heroe col-12 py-3">
        <router-link :to="{ name: 'heroesList' }" class="back-heroes-link">
            <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
            Volver al listado de heroes
        </router-link>
        <div class="d-flex justify-content-center mt-3">
            <DetailHeroeCard :heroe="heroe" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useHeroesStore } from '../stores/heroes'

export default {
    name: 'DetailHeroe',
    components: {
        DetailHeroeCard: () => import('../components/DetailHeroeCard.vue')
    },
    data() {
        return {
            heroeId: this.$route.params.id,
            playerStore: useHeroesStore()
        };
    },
    computed: {
        ...mapState(useHeroesStore, ['heroes']),
        heroe() {
            return this.getHeroe(this.$route.params.id) || {};
        }
    },
    methods: {
        ...mapActions(useHeroesStore, ['getHeroeById']),
        getHeroe(heroeId) {
            return this.getHeroeById(heroeId);
        },
        goToHeroesList() {
            this.$router.push('heroesList');
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-heroe {
    height: 100vh;
    .back-heroes-link {
        color: #DFF3E4;
        text-decoration: none;
    }
}
</style>