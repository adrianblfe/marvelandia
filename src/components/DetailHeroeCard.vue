<template>
    <div class="detail-heroe-card card mb-3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img :src="`${heroe.thumbnail.path}/portrait_incredible.${heroe.thumbnail.extension}`" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{ heroe.name }}</h5>
                    <p v-if="heroe.description" class="card-text">{{ heroe.description }}</p>
                    <p v-if="!heroe.description" class="card-text">
                        ¡¡Personaje sin descripción!! Pero no te preocupes en Marvel
                        tenemos toda la información disponible <a :href="getLinkHeroe()" target="_blank">sobre este personaje</a> ;).
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeroeCard',
    props: {
        heroe: {
            type: Object,
            required: true
        }
    },
    methods: {
        getLinkHeroe() {
            return this.heroe.urls.find((url) => url.type === 'detail').url;
        }
    }
}
</script>

<style lang="scss" scoped>
.detail-heroe-card {
    max-height: 50%;
}
</style>