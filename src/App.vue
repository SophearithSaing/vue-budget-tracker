<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// Overwrite primevue
.record {
  .p-tabview-nav {
    justify-content: center;
  }
  .p-tabview-nav-link {
    gap: 8px;
    align-items: flex-start;
  }
  &__form {
    input {
      width: 100%;
    }
    button {
      min-width: 35px;
    }
  }
}
</style>
