<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <NuxtLink to="/page1">Page 1</NuxtLink>
    <NuxtLink to="/page2">Page 2</NuxtLink>
    <NuxtLink to="/page3">Page 3</NuxtLink>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 16px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;

  > * {
    padding: 0 16px;
    font-size: 24px;
    line-height: 150%;
    color: #78b9ff;
    text-decoration: none;
    transition: opacity .2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>