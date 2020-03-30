<template>
  <div class="debtorCardclass" v-bind="debtors">
    <div>
      <div class="debtorCard" v-for="debtor in debtors" :key="debtor.id">
        <div class="left">
          <div class="handle" :style="`background-color: ${debtor.color} `">
            ⋮
          </div>
          Debtor ID: {{ debtor.id }}<br />
          File Number: {{ debtor.filenumber }}<br />
          State: {{ debtor.state }}
        </div>
        <div class="right">
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
.debtorCard {
  border-style: solid;
  border-width: 1px;
  border-radius: 1em;
  margin: 1% 0 0 5px;
  padding: 1% 0;
  background-color: #2d3436;
  color: whitesmoke;
  flex-grow: 1;
  display: flex;
}
.cardLink,
a {
  text-decoration: none;
}
.debtorCard:hover {
  background: #a29bfe;
  color: black;
}
.debtorCardClass {
  display: flex;
}
.handle {
  vertical-align: middle;
  height: 100%;
  width: 20px;
  text-align: center;
  font-size: 3rem;
  margin-right: 2%;
  margin-left: 2px;
  border-radius: 1em;
  color: darkblue;
  /* Acts as a backup in the event of a color render failure */
  background-color: white;
}
.handle:hover {
  cursor: pointer;
}
.left {
  display: flex;
  min-width: 50%;
  text-align: left;
}
.right {
  min-width: 50%;
}
</style>
