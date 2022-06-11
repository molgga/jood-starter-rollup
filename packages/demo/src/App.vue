<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { echo as packageEchoA } from '@jood-starter-rollup/package-a';
import { echo as packageEchoB } from '@jood-starter-rollup/package-b';

export default defineComponent({
  setup() {
    console.log(packageEchoA());
    console.log(packageEchoB());
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
