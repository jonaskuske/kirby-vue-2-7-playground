<template>
  <section class="k-demo-section">
    <header class="k-section-header">
      <h2 class="k-headline">Your custom section</h2>
    </header>
    <p>{{ message }}</p>
  </section>
</template>

<script>
export default {
  props: {
    message: String,
    headlineColor: {
      type: String,
      default: "blue",
    },
  },
};
</script>

<style scoped>
.k-headline {
  color: v-bind(headlineColor);
}
</style>
