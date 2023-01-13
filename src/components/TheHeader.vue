<template>
  <div class="header px-4 py-2">
    <router-link :to="{ name: 'heroesList' }" class="back-heroes-link">
      <h2 class="title">
        {{ title }}
      </h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  width: 100%;

  .back-heroes-link {
    color: #DFF3E4;
    text-decoration: none;
  }

  .title {
    color: #FFF;
  }
}
</style>
