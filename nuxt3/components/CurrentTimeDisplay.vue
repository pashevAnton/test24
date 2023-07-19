<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";

const interval = ref(null)
const currentTime = ref(new Date())

onMounted(() => {
  interval.value = setInterval(() => {
    currentTime.value = new Date()
  }, 1000);
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
</script>

<template>
  <div class="current-time-display">
    <div class="current-time-display__time">{{ currentTime }}</div>
  </div>
</template>

<style scoped>
.current-time-display {
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.current-time-display__time {
  color: #ffffff;
  font-size: 48px;
  line-height: 150%;
  font-weight: 500;
  text-align: center;
  padding: 32px;
  margin: auto;
}
</style>