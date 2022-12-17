<template>
  <div id="app">
    <div class="row container-header">
      <div class="col-12 px-0">
        <TheHeader title="Marvelandia" />
      </div>
    </div>
    <div class="px-3">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TheHeader: () => import('./components/TheHeader.vue'),
  }
}
</script>

<style>
</style>
