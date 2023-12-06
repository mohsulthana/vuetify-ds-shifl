<script setup lang="ts">
interface Props {
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary-blue-90",
});
</script>

<template>
  <v-btn :color="props.color" variant="flat">
    <slot />
  </v-btn>
</template>
