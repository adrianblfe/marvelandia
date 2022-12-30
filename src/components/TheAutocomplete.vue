<template>
    <div class="the-autocomplete" v-click-outside="() => showResults = false">
        <input
            :value="value"
            class="form-control form-control-sm"
            type="text"
            :placeholder="placeholder"
            @focus="showResults = true"
            @input="getItems"
        >
        <ul
            v-if="showResults"
            :class="{
                'list-group': true,
                'list-group-default': true,
                'list-group-items': options.length
            }"
        >
            <li v-for="(option, index) in options" :key="option.title+index" class="list-group-item" @click="selectItem(option)">{{ option.title }}</li>
            <li v-if="!options.length" class="list-group-item">Sin resultados</li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import { useComicsStore } from '@/stores/comics'
import { useEventsStore } from '../stores/events'
import capitalize from '@/mixins/capitalize'
import vClickOutside from 'v-click-outside'

export default {
    name: 'TheAutocomplete',
    mixins: [capitalize],
    props: {
        placeholder: {
            type: String,
            required: true,
        },
        itemText: {
            type: String,
            required: true
        },
        store: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        },
        paramSearch: {
            type: String,
            required: true
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    data() {
        return {
            timeoutId: null,
            showResults: false,
            capitalizeStore: this.capitalize(this.store),
        };
    },
    computed: {
        ...mapState(useComicsStore, ['comics', 'selectedComic']),
        ...mapState(useEventsStore, ['events', 'selectedEvent']),
        options() {
            return this[`${this.store}`];
        }
    },
    methods: {
        ...mapActions(useComicsStore, ['getComicsList']),
        ...mapActions(useEventsStore, ['getEventsList']),
        selectItem(item) {
            this.$emit('select-item', item);
        },
        getItems(event) {
            if (this.timeoutId) {
                clearTimeout(this.timeoutId);
            }
            this.timeoutId = setTimeout(() => {
                this[`get${this.capitalizeStore}List`]({ [this.paramSearch]: event.target.value || undefined, limit: 100 });
            }, 1000);
        },
    }
}
</script>

<style lang="scss" scoped>
.the-autocomplete {
    .list-group-default {
        z-index: 9999;
        position: absolute;
    }
    .list-group-items {
        max-height: 350px;
        overflow-y: auto;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
}
</style>