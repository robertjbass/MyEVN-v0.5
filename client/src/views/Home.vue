<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/mevn.jpg" width="350" />
    <Debtor />
  </div>
</template>

<script>
// @ is an alias to /src
import Debtor from "@/components/Debtor.vue";

export default {
  name: "home",
  components: {
    Debtor
  },
  props: {
    debtors: {
      id: Number,
      name: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zip: String
    }
  }
};
</script>
