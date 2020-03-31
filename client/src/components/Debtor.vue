<template>
  <div class="debtorCardclass" v-bind="debtors">
    <div>
      <div class="debtorCard" v-for="debtor in debtors" :key="debtor.id">
        <div class="left">
          <div class="handle" :style="`background-color: ${debtor.color} `">
            <br />⋮<br /><br />
          </div>
          <br />
          Debtor ID: {{ debtor.id }}<br />
          File Number: {{ debtor.filenumber }}<br />
          State: {{ debtor.state }}
        </div>
        <div class="right">
          <br />
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
  margin: 5px 10px 5px 10px;
  padding: 0% 0% 0% 0%;
  border: 2px;
  background-color: #2d3436;
  color: #b2bec3;
  flex-grow: 1;
  display: flex;
  border-style: solid;
  height: 100%;
}
.cardLink,
a {
  text-decoration: none;
}
.debtorCard:hover {
  background: #a29bfe7c;
}
.debtorCardClass {
  display: flex;
}
.handle {
  height: 100%;
  width: 15px;
  text-align: center;
  font-size: 1.5rem;
  margin: 0px 10px 0px 0px;
  border-radius: 70em 4em 4em 70em;
  color: black;
  /* Acts as a backup in the event of a color render failure */
  background-color: white;
  align-self: center;
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
