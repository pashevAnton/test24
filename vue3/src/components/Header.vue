<script setup lang="ts">
import {useRoute} from "vue-router";
import {computed} from "vue";

const route = useRoute();

const pageName = computed(() => {
  switch (route.name) {
    case 'page1':
      return 'Page 1'
    case 'page2':
      return 'Page 2'
    case 'page3':
      return 'Page 3'
    default:
      return 'Some Page'
  }
})
</script>

<template>
  <header class="header">
    {{ pageName }}
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 16px;
  left: 0;
  right: 0;
  font-size: 32px;
  line-height: 150%;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
}
</style>