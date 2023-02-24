<script setup lang="ts">
import { Browser } from "webextension-polyfill";

const browser = ref<Browser>();

onMounted(async () => {
  browser.value = await import("webextension-polyfill");
});

const hoursOverview = computed({
  get: () => browser.value?.storage.sync.get("hoursOverview"),
  set: (value) => browser.value?.storage.sync.set({ hoursOverview: value })
});
const totalDays = computed({
  get: () => browser.value?.storage.sync.get("totalDays"),
  set: (value) => browser.value?.storage.sync.set({ totalDays: value })
});
</script>

<template>
  <div class="config-menu">
    <div class="title">Vertec Improver</div>
    <div class="options">
      <div class="options-list">
        <div class="option">
          <input type="checkbox" name="hours-overview" id="hours-overview" v-model="hoursOverview" />
          <label for="hours-overview">Show hours overview</label>
        </div>
        <div class="option">
          <input type="checkbox" name="total-days" id="total-days" v-model="totalDays" />
          <label for="total-days">Show total days</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.config-menu {
  padding: 15px;

  .title {
    font-size: 2rem;
  }
  .options {
    .options-list {
      display: flex;
      flex-direction: column;

      .option {
      }
    }
  }
}
</style>
