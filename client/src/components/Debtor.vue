<template>
  <div class="debtorCardclass" v-bind="debtors">
    <p class="debtorCard" v-for="debtor in debtors" :key="debtor.id">
      {{ debtor.id }} - {{ debtor.name }}<br />{{ debtor.address }}
      {{ debtor.address2 }}<br />{{ debtor.city }} {{ debtor.state }}
      {{ debtor.zip }}
    </p>
  </div>
</template>

<script>
import debtors from "@/assets/debtors.json";

export default {
  name: "Debtor",
  computed: {
    debtors() {
      return debtors.debtors.map(debtors => {
        return debtors;
      });
    }
  }
};
</script>

<style scoped>
h3 {
  /* margin: 40px 0 0; */
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.debtorCard {
  border-style: solid;
  border-width: 1px;
  border-radius: 1em;
  margin: 2% 0 2% 0;
  padding: 2%;
  flex-grow: 1;
  background-color: slateblue;
  color: whitesmoke;
}
.cardLink,
a {
  text-decoration: none;
}
.debtorCard:hover {
  background: rgba(105, 90, 205, 0.52);
}
</style>
