<template>
  <div class="progress-element">
    <p class="progress-label relative">{{ copy }}</p>
    <div
      class="progress-container relative w-full overflow-hidden rounded-sm h-3 bg-gray-600 before:bg-gray-200 before:absolute before:top-0 before:left:0 before:h-full"
    >
      <progress class="opacity-0" max="100" :value="value">
        {{ value }}%
      </progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  value: Number;
  copy: String;
}

const props = defineProps<Props>();

const progressValueContent = computed(() => {
  const { value } = props;

  return `"${value}%"`;
});

const progressValue = computed(() => {
  const { value } = props;

  return `${value}%`;
});
</script>

<style>
.progress-container::before {
  content: "";
  width: v-bind(progressValue);
}

.progress-label::after {
  content: v-bind(progressValueContent);
  position: absolute;
  top: 0;
  right: 0;
}
</style>
