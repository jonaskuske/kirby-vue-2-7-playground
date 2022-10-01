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
  },
};
</script>

<style>
/** Put your CSS here **/
</style>
