<template>
  <div class="vue3-vite-container">
    <keep-alive v-if="keepAlive">
      <router-view/>
    </keep-alive>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup (props: any) {
    const store = useStore();

    console.log(store.state.user.userId);

    // 使用 keep-alive
    const keepAliveArray: string[] = ["/"];
    const keepAlive = computed(() => keepAliveArray.includes(location.pathname));

    return {
      keepAlive,
      store
    };
  }
};
</script>

<style scoped lang="less">
@color: red;

.vue3-vite-container {
  color: @color;
}
</style>
