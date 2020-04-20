<template>
  <div class="app">
    <nav class="app__nav">
      <ul class="app-list">
        <li><router-link to="/">Главная</router-link></li>
        <li>
          <router-link :to="{ name: 'Patterns' }">Паттерны</router-link>
          <ul>
            <li>
              <router-link :to="{ name: 'PatternsCreational' }"
                >Порождающие паттерны</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'PatternsStructural' }"
                >Структурные паттерны</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'PatternsBehavioral' }"
                >Поводенческие паттерны</router-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  &-list {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
