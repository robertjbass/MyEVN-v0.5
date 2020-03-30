<template>
  <div class="home">
    <h3>This is the home page</h3>

    <DebtorList />
  </div>
</template>

<script>
import DebtorList from "@/components/DebtorList.vue";

export default {
  name: "home",
  components: {
    DebtorList
  }
};
</script>
<style scoped></style>
