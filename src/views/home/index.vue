<template>
  {{userId}}
  <button class="btn-test" @click="setUserId">修改userId</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import "@/assets/postcssAuto/test.less";
import {getUser, getUserInfo} from "@/reqeues/api/user";

export default defineComponent({
  mounted() {
    getUser();
    getUserInfo({data:{name: "ljy"}, params: {name: "ljy2"}});
  },
  setup () {
    const store = useStore();
    const setUserId = () => {
      store.commit("setUserId", {
        userId: "00000000"
      });
    };

    const userId = computed(() => store.state.user.userId);

    return {
      userId: userId,
      setUserId
    };
  }
});
</script>
