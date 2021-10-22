<template>
  <div>
    <img alt="Avatar" :src="user.picture.medium" />
    <router-link :to="'/user/' + user.login.username">
      {{ user.login.username }}
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserCard",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
});
</script>
