<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref} from "vue";
import useWidget from '@/plugins/useWidget';

const interval = ref<null | number>(null)
const currentTime = ref(new Date())
const {widgetLoaded} = useWidget();

onMounted(() => {
  interval.value = setInterval(() => {
    currentTime.value = new Date()
  }, 1000);
})

onBeforeUnmount(() => {
  clearInterval(interval.value!)
})


</script>

<template>
  <div class="current-time-display-with-widget" :data-time="currentTime">
    <div class="current-time-display-with-widget__time">{{ currentTime }}</div>
    <div class="widget-container exampleWrapperContent">{{widgetLoaded.valueOf()}}</div>
  </div>
</template>

<style scoped>
.current-time-display-with-widget {
  width: 100%;
  min-height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.current-time-display-with-widget__time {
  color: #000;
  font-size: 48px;
  line-height: 150%;
  font-weight: 500;
  text-align: center;
  padding: 32px;
  margin: auto;
}
</style>