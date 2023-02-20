<template>
  <div class="under-construction flex flex-col justify-between h-full">
    <div class="flex items-center justify-center gap-5">
      <div class="divider"></div>
      <p class="text-white text-center">
        <strong>{{ PAGE_DOMAIN }}</strong>
      </p>
      <div class="divider"></div>
    </div>

    <div class="flex flex-col gap-5">
      <h1
        class="w-full text-3xl font-bold text-center uppercase max-w-2xl mx-auto lg:text-7xl"
      >
        Strona w przygotowaniu
      </h1>
      <ProgressBar value="80" copy="Jeszcze chwilka" />
    </div>

    <div class="flex gap-10 w-full justify-center">
      <a href="">
        <SvgIcon class="w-16 h-16" name="social-media-instagram" />
      </a>
      <a href=""
        ><SvgIcon class="w-16 h-16" name="social-media-allegro"></SvgIcon
      ></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/Atoms/SvgIcon/SvgIcon.vue";
import ProgressBar from "@/components/Atoms/ProgressBar/ProgressBar.vue";

const PAGE_DOMAIN = import.meta.env.VITE_PAGE_DOMAIN;
</script>

<style>
.divider {
  @apply h-0.5 bg-white w-24;
}

.under-construction {
  min-height: calc(100vh - 4rem);
}
</style>
