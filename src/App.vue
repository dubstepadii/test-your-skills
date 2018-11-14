<template>
  <div id="app">
    <header>
      <router-link :to="{ name: 'home' }">Test</router-link>
    </header>
    <main>
      <transition appear mode="out-in" name="slide-fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      results: [],
    };
  },
};
</script>

<style lang="less" src="@/assets/styles/app.less"></style>
