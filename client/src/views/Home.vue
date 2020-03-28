<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mevn.jpg" width="350" />
    <Debtor />
  </div>
</template>

<script>
import Debtor from "@/components/Debtor.vue";

export default {
  name: "home",
  components: {
    Debtor
  }
};
</script>
