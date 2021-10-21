<template>
  <UserProfile v-for="user in users" :user="user" :key="user" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserProfile from "@/components/UserProfile.vue";

export default defineComponent({
  name: "App",
  components: {
    UserProfile
  },
  data() {
    return {
      users: []
    };
  },
  async created() {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const json = await res.json();
    this.users = await json.results;
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
