<template>
  <div id="app" class="container-fluid">
    <div class="row container-header mx-0">
      <div class="col-12 px-0">
        <TheHeader title="Marvelandia" />
      </div>
    </div>
    <div class="row container-main px-3">
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

<style lang="scss" scoped>
#app {
  height: 100%;
  padding: 0;
  .container-main {
    background-color: $blue;
    margin: 0px;
  }
}
</style>
