<template>
  <div class="theme">
    <h3>These are color schemes to reference</h3>
    <div class="one">
      <div class="color c1">#55efc4</div>
      <div class="color c2">#81ecec</div>
      <div class="color c3">#74b9ff</div>
      <div class="color c4">#a29bfe</div>
      <div class="color c5">#dfe6e9</div>
    </div>
    <div class="two">
      <div class="color c6">#00b894</div>
      <div class="color c7">#00cec9</div>
      <div class="color c8">#0984e3</div>
      <div class="color c9">#6c5ce7</div>
      <div class="color c10">#b2bec3</div>
    </div>
    <div class="three">
      <div class="color c11">#ffeaa7</div>
      <div class="color c12">#fab1a0</div>
      <div class="color c13">#ff7675</div>
      <div class="color c14">#fd79a8</div>
      <div class="color c15">#636e72</div>
    </div>
    <div class="four">
      <div class="color c16">#fdcb6e</div>
      <div class="color c17">#e17055</div>
      <div class="color c18">#d63031</div>
      <div class="color c19">#e84393</div>
      <div class="color c20">#2d3436</div>
    </div>
    <div class="five">
      <div class="color c21">cflower</div>
      <div class="color c22" id="grad">#pholder</div>
      <div class="color c1">#55efc4</div>
      <div class="color c2">#81ecec</div>
      <div class="color c7">#00cec9</div>
      <div class="color c6">#00b894</div>
      <div class="color c3">#74b9ff</div>
      <div class="color c8">#0984e3</div>
      <div class="color c4">#a29bfe</div>
      <div class="color c9">#6c5ce7</div>
      <div class="color c11">#ffeaa7</div>
      <div class="color c16">#fdcb6e</div>
      <div class="color c14">#fd79a8</div>
      <div class="color c19">#e84393</div>
      <div class="color c12">#fab1a0</div>
      <div class="color c13">#ff7675</div>
      <div class="color c17">#e17055</div>
      <div class="color c18">#d63031</div>
      <div class="color c5">#dfe6e9</div>
      <div class="color c10">#b2bec3</div>
      <div class="color c15">#636e72</div>
      <div class="color c20">#2d3436</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColorSchemes"
};
</script>

<style scoped>
h3 {
  color: whitesmoke;
}
.theme {
  flex-wrap: wrap;
  padding: 5px;
  margin: 5px;
  border-radius: 1em;
  background: #636e72;
}
.one {
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  border-radius: 1em;
  background: #a29bfe;
}
.two {
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  border-radius: 1em;
  background: #6c5ce7;
}
.three {
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  border-radius: 1em;
  color: white;
  background: #0984e3;
}
.four {
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  border-radius: 1em;
  color: white;
  background: #2d3436;
}
.five {
  display: flex;
  border-style: solid;
  border-width: 1px;
  padding: 5px;
  margin: 5px;
  flex-wrap: wrap;
  border-radius: 1em;
  background: #2d3436;
  color: white;
}
.color {
  border-style: solid;
  min-width: 40%;
  margin: 5px;
  padding: 1%;
  flex-grow: 1;
  border-radius: 1em;
  font-weight: 500;
}
.c1 {
  background-color: #55efc4;
}
.c2 {
  background-color: #81ecec;
}
.c3 {
  background-color: #74b9ff;
}
.c4 {
  background-color: #a29bfe;
}
.c5 {
  background-color: #dfe6e9;
}
.c6 {
  background-color: #00b894;
}
.c7 {
  background-color: #00cec9;
}
.c8 {
  background-color: #0984e3;
  color: white;
}
.c9 {
  background-color: #6c5ce7;
  color: white;
}
.c10 {
  background-color: #b2bec3;
}
.c11 {
  background-color: #ffeaa7;
  color: black;
}
.c12 {
  background-color: #fab1a0;
  color: black;
}
.c13 {
  background-color: #ff7675;
}
.c14 {
  background-color: #fd79a8;
}
.c15 {
  background-color: #636e72;
}
.c16 {
  background-color: #fdcb6e;
  color: black;
}
.c17 {
  background-color: #e17055;
}
.c18 {
  background-color: #d63031;
}
.c19 {
  background-color: #e84393;
}
.c20 {
  background-color: #2d3436;
}
.c21 {
  background: cornflowerblue;
}
#grad {
  background-image: linear-gradient(to bottom right, cornflowerblue, #2d3436);
}
</style>
