<template>
  <div>
    <SButton>Example button</SButton>

    <div class="hello-world">Hello world</div>
  </div>
</template>

<script lang="ts" setup>
import SButton from "@/components/Button/SButton.vue";
</script>

<style>
@import url('./styles/main.css');

.hello-world {
  background-color: rgb(var(--v-theme-primary-blue-10));
}
</style>
