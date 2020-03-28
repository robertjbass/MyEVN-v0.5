<template>
  <div>
    <p v-for="debtor in debtors" :key="debtor.id">
      {{ debtor.id }} {{ debtor.name }} {{ debtor.address }}
      {{ debtor.address2 }} {{ debtor.city }} {{ debtor.state }}
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
  margin: 40px 0 0;
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
  padding-bottom: 0%;
  border-radius: 1em;
  margin: 5px;
  min-width: 350px;
  flex-grow: 1;
  background-color: slateblue;
}
.cardLink,
a {
  text-decoration: none;
  color: whitesmoke;
}
.debtorCard:hover {
  background: rgba(105, 90, 205, 0.52);
}
</style>
