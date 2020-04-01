<template>
  <div class="debtors" v-bind="debtors">
    <div class="debtor-card" v-for="debtor in debtors" :key="debtor.id">
      <div class="handle" :style="`background-color: ${debtor.color} `"></div>
      <div class="card-text">
        <div class="left-text">
          Debtor ID: {{ debtor.id }}<br />
          File Number: {{ debtor.filenumber }}<br />
          State: {{ debtor.state }}
        </div>
        <div class="right-text">
          {{ debtor.name }}<br />
          {{ debtor.address }} {{ debtor.address2 }}<br />
          {{ debtor.city }}, {{ debtor.state }} {{ debtor.zip }}
        </div>
      </div>
    </div>
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
    },
    // Not operational yet. Working on dynamic colors
    debtorStatus() {
      return debtors.debtors.map(debtors => {
        return debtors;
      });
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.debtor-card {
  display: flex;
  flex-wrap: nowrap;
  border-style: solid;
  border-width: 1px;
  border-radius: 1rem;
  margin: 5px 10px 5px 10px;
  padding: 0% 0% 0% 0%;
  border: 2px;
  background-color: #2d3436;
  color: #b2bec3;
  height: 100%;
  max-width: 100%;
  flex-grow: 1;
}
.cardLink,
a {
  text-decoration: none;
}
.debtor-card:hover {
  background: #a29bfe7c;
}
.handle {
  max-height: 100%;
  width: 3%;
  min-width: 15px;
  border-radius: 3em 3em 3em 3em;
  margin: 10px 1px 10px 1px;
}
.handle:hover {
  cursor: pointer;
}
.left-text {
  padding: 5px;
  min-width: 45%;
  display: flex;
  flex-wrap: nowrap;
}
.right-text {
  padding: 5px;
  min-width: 45%;
  display: flex;
  flex-wrap: nowrap;
}
.card-text {
  display: flex;
  padding: 10px;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-grow: 1;
}
</style>
