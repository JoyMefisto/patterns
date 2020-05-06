<template>
  <div>
    <h1>Пораждающие паттерны проектирования</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'PatternsCreationalSingleton' }"
          >Одиночка</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PatternsCreationalFactoryMethod' }"
          >Фабричный метод</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PatternsCreationalPrototype' }"
          >Прототип</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PatternsCreationalAbstractFactory' }"
          >Абстрактная фабрика</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'PatternsCreationalBuilder' }"
          >Строитель</router-link
        >
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'PatternsCreational'
}
</script>

<style lang="scss"></style>
