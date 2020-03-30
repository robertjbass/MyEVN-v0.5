<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link><br />
      <img alt="Vue logo" src="@/assets/mevn.jpg" width="150" />
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding-top: 30px;
}

#nav a {
  font-weight: bold;
  color: #74b9ff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #0984e3;
  text-decoration: underline;
}
</style>
