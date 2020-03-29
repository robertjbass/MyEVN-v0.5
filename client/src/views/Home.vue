<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mevn.jpg" width="350" />
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
