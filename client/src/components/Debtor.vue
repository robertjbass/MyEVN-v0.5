<template>
  <div class="debtor" v-bind:id="debtors.id">
    {{ name }} <br />
    {{ address }}<br />
    {{ address2 }}<br />
    {{ city }}, {{ state }} {{ zip }}
  </div>
</template>

<script>
import Debtor from "@/components/Debtor.vue";
import debtors from "@/assets/debtors.json";

export default {
  name: "Debtor",
  props: {
    id: Number,
    name: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: String
  }
  // data() {
  //   return {
  //     key: value
  //   };
  // }
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
