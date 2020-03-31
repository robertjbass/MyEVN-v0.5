<template>
  <div class="debtor-list" id="backgrad">
    <h3>This is the debtor list card</h3>
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
  background-color: #2d3436;
  color: whitesmoke;
  border-radius: 1em;
  padding: 1em 1em;
}
#backgrad {
  background-image: linear-gradient(to bottom, #2d3436, black);
}
</style>
