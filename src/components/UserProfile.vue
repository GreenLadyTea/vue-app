<template>
  <div>
    <img alt="Avatar" :src="user.avatar" />
    <div>{{ user.nickname }}</div>
    <div>{{ user.firstname + ' ' + user.lastname }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});
</script>

<style scoped>

</style>