<template>
  <div class="debtor-list">
    <Debtor />
  </div>
</template>

<script>
import Debtor from "@/components/Debtor.vue";
export default {
  name: "DebtorList",
  components: {
    Debtor
  }
};
</script>

<style scoped>
.debtor-list {
  background-color: blueviolet;
  border-radius: 1em;
  padding: 1.5% 2.5%;
}
</style>
