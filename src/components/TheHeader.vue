<template>
  <div class="header px-4 py-2">
    <h2 class="title">{{ title }}</h2>
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
  .title {
    color: #FFF;
  }
}
</style>
