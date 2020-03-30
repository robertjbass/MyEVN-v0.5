<template>
  <div class="about">
    <h3>This is an about page</h3>
    <ColorSchemes />
  </div>
</template>

<script>
import ColorSchemes from "@/components/ColorSchemes.vue";
export default {
  name: "About",
  components: {
    ColorSchemes
  }
};
</script>

<style scoped>
.debtor-list {
  background-color: #636e72;
  border-radius: 1em;
  padding: 1.5% 2.5%;
}
</style>
