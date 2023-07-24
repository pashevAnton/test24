<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted} from "vue";

const router = useRouter()

onMounted(() => {
  router.replace('/page1')
})
</script>

<template>

</template>

<style scoped>

</style>