<template>
  <div style="height: 100vh; width: 100vw">
    <olmap/>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import "@/assets/postcssAuto/test.less";
import olmap from "@/components/openlayer/OlMap.vue";

export default defineComponent({
  components: {
    olmap,
  },
  setup () {
    const store = useStore();
    return {};
  }
});
</script>
