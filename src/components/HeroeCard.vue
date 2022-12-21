<template>
    <div class="card heroe-card" @click="goToHeroe">
        <img :src="`${heroe.thumbnail.path}/landscape_amazing.${heroe.thumbnail.extension}`" class="card-img-top" alt="heroe-pic">
        <div class="card-body">
            <h5 class="card-title text-center">{{ heroe.name }}</h5>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroeCard',
    props: {
        heroe: {
            type: Object,
            required: true
        }
    },
    methods: {
        goToHeroe() {
            this.$router.push({ name: 'detailHeroe', params: { id: this.heroe.id } });
        }
    }
}
</script>

<style lang="scss" scoped>
.heroe-card {
    max-width: 15rem;
    cursor: pointer;
}
</style>